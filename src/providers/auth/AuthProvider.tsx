import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { makeRedirectUri, useAutoDiscovery, useAuthRequest } from 'expo-auth-session';
import { default as Constants } from 'expo-constants';
import * as ExpoSecureStore from 'expo-secure-store';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import { Platform } from 'react-native';

const useExpoSecureStore = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ scheme: 'arte-publica-permanente.app' });

console.log('redirectUri', redirectUri); // <-- you will need to add this to your auth0 callbacks / logout configs

maybeCompleteAuthSession();

function promiseSessionStorageGetItem(item: string) {
    return Promise.resolve(sessionStorage.getItem(item));
}

function promiseSessionStorageSetItem(item: string, value: string) {
    return Promise.resolve(sessionStorage.setItem(item, value));
}

const setStorageItem = useExpoSecureStore ? ExpoSecureStore.setItemAsync : promiseSessionStorageSetItem;
const getStorageItem = useExpoSecureStore ? ExpoSecureStore.getItemAsync : promiseSessionStorageGetItem;

type AuthContextProps = {
    user?: {
        email: string;
        roles: string[];
    };
};

type Auth0UserProps = {
    email: string;
    'artepublica/roles': string[];
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export default function AuthProvider({ children }: PropsWithChildren): JSX.Element {
    const discovery = useAutoDiscovery(Constants.expoConfig?.extra?.auth0Namespace);
    const [
        token,
        setToken,
    ] = useState<string | undefined>();
    const [
        userInfo,
        setUserInfo,
    ] = useState<Auth0UserProps | undefined>();

    const [
        request,
        response,
        promptAsync,
    ] = useAuthRequest(
        {
            redirectUri,
            clientId: Constants.expoConfig?.extra?.auth0ClientId,
            responseType: 'token',
            scopes: [
                'openid',
                'profile',
                'email',
            ],
            extraParams: {
                audience: Constants.expoConfig?.extra?.auth0HasuraAudience,
            },
        },
        discovery,
    );

    useEffect(() => {
        getCachedToken();
    }, []);

    useEffect(() => {
        if (response?.type === 'success') {
            const token = response.authentication?.accessToken ?? '';
            setToken(token);
        }
    }, [response]);

    useEffect(() => {
        setCachedToken(token ?? '');
        if (token) {
            getUserInfo();
        }
    }, [token]);

    async function getCachedToken() {
        await getStorageItem('@session')
            .then((value) => {
                if (value !== null) {
                    setToken(value);
                }
            })
            .catch((error) => console.log('error getCachedToken', error));
    }

    async function setCachedToken(token: string) {
        await setStorageItem('@session', token).catch((error) => console.log('error setCachedToken', error));
    }

    async function getUserInfo() {
        await fetch(`${Constants.expoConfig?.extra?.auth0Namespace}/userinfo`, { headers: { Authorization: `Bearer ${token}` } })
            .then(async (response) => {
                const user = await response.json();
                setUserInfo(user);
            })
            .catch((error) => {
                //TODO se error = 401 => dar um refresh no token
                console.log('error getUserInfo', error);
                setToken(undefined);
            });
    }

    if (discovery && request && !response && !token) {
        promptAsync();
    }

    const user = userInfo
        ? {
              email: userInfo.email,
              roles: userInfo['artepublica/roles'],
          }
        : undefined;

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): AuthContextProps {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('error application context');
    }
    return context;
}

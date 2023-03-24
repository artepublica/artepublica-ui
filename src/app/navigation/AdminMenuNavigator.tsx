import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import { useTheme } from '@utils';

import HeaderLeft from './HeaderLeft';
import HeaderTitle from './HeaderTitle';
import SafeViewFunction from './SafeViewFunction';
import { Home } from '../../pages/admin/home';
import AuthProvider from '../../providers/auth/AuthProvider';

const DrawerNavigator = createDrawerNavigator<AdminMenuNavigatorParamsList>();

export type AdminMenuNavigatorParamsList = {
    Home: undefined;
};

type AdminMenuNavigatorProps = {
    testOnly_initialRouteName?: keyof AdminMenuNavigatorParamsList;
};

export function AdminMenuNavigator({ testOnly_initialRouteName }: AdminMenuNavigatorProps): JSX.Element {
    const { theme } = useTheme();
    const { width } = useWindowDimensions();

    return (
        <AuthProvider>
            <DrawerNavigator.Navigator
                initialRouteName={testOnly_initialRouteName ?? 'Home'}
                screenOptions={{
                    drawerPosition: 'left',
                    drawerActiveTintColor: theme.navigation.active,
                    drawerInactiveTintColor: theme.navigation.inactive,
                }}
            >
                <DrawerNavigator.Screen
                    name="Home"
                    component={SafeViewFunction({ Component: Home })}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTitleAlign: width > 750 ? 'center' : 'left',
                        headerTitle: () => <HeaderTitle />,
                        headerLeft: () => <HeaderLeft navigation={navigation} />,
                    })}
                />
            </DrawerNavigator.Navigator>
        </AuthProvider>
    );
}

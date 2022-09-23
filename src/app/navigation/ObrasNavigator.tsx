import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigatorScreenParams } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { Obras, Mapa, MandatoPrefeito } from '@pages';
import { autores, enderecos, obras, status, Theme, tipologias, useTheme, zonas } from '@utils';

import { TipoMenuNavigator, TipoMenuNavigatorParamList } from './TipoMenuNavigator';

const DrawerNavigator = createDrawerNavigator<ObrasNavigatorParamsList>();

export type ObrasNavigatorParamsList = {
    Home: undefined;
    Tipologias: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Autores: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Zonas: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Enderecos: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Status: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Mapa: undefined;
    MandatoPrefeito: undefined;
};

type ObrasNavigatorProps = {
    testOnly_initialRouteName?: keyof ObrasNavigatorParamsList;
};

export function ObrasNavigator({ testOnly_initialRouteName }: ObrasNavigatorProps): JSX.Element {
    const { theme } = useTheme();

    const style = styles(theme);

    return (
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
                component={Obras}
                options={({ navigation }) => ({
                    title: 'Obras ',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Obras </Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="home-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Tipologias"
                options={({ navigation }) => ({
                    title: 'Tipologias ',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Tipologias </Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Tipologia" tipos={tipologias} zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Autores"
                options={({ navigation }) => ({
                    title: 'Autores ',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Autores </Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Autor" tipos={autores} tipologia rede zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Zonas"
                options={({ navigation }) => ({
                    title: 'Zonas ',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Zonas </Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Zona" tipos={zonas} tipologia />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Enderecos"
                options={({ navigation }) => ({
                    title: 'Endereços ',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Endereços </Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Endereço" tipos={enderecos} tipologia zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Status"
                options={({ navigation }) => ({
                    title: 'Status ',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Status </Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Status" tipos={status} tipologia zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Mapa"
                component={Mapa}
                options={({ navigation }) => ({
                    title: 'Mapa ',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Mapa </Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="MandatoPrefeito"
                options={({ navigation }) => ({
                    title: 'Mandato Prefeito',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Mandato Prefeito</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <MandatoPrefeito {...props} obras={obras} />}
            </DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
    );
}

function styles(theme: Theme) {
    return StyleSheet.create({
        title: {
            fontSize: theme.header.fontSize,
            lineHeight: theme.header.lineHeight,
            color: theme.navigation.active,
        },
    });
}

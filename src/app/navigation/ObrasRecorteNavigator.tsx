import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigatorScreenParams } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { GraficoPoliticaPublica, ObrasRecorte, MapaRecorte, MapaTodasXRecorte, Decade, Exposicoes, MandatoPrefeito, Prefeitos } from '@pages';
import { autoresRecorte, enderecosRecorte, statusRecorte, Theme, tipologiasRecorte, useTheme, zonasRecorte, obrasRecorte } from '@utils';

import { TipoMenuNavigator, TipoMenuNavigatorParamList } from './TipoMenuNavigator';

const DrawerNavigator = createDrawerNavigator<ObrasRecorteNavigatorParamsList>();

export type ObrasRecorteNavigatorParamsList = {
    Home: undefined;
    Tipologias: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Autores: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Zonas: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Enderecos: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Status: NavigatorScreenParams<TipoMenuNavigatorParamList>;
    Mapa: undefined;
    GraficoPoliticaPublica: undefined;
    MapaTodasXRecorte: undefined;
    Decade: undefined;
    Exposicoes: undefined;
    MandatoPrefeito: undefined;
    Prefeitos: undefined;
};

type ObrasRecorteNavigatorProps = {
    testOnly_initialRouteName?: keyof ObrasRecorteNavigatorParamsList;
};

export function ObrasRecorteNavigator({ testOnly_initialRouteName }: ObrasRecorteNavigatorProps): JSX.Element {
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
                component={ObrasRecorte}
                options={({ navigation }) => ({
                    title: 'Obras Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Obras Recorte</Text>,
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
                    title: 'Tipologias Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Tipologias Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Tipologia" tipos={tipologiasRecorte} zona decada mapa />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Autores"
                options={({ navigation }) => ({
                    title: 'Autores Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Autores Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Autor" tipos={autoresRecorte} tipologia rede zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Zonas"
                options={({ navigation }) => ({
                    title: 'Zonas Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Zonas Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Zona" tipos={zonasRecorte} tipologia />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Enderecos"
                options={({ navigation }) => ({
                    title: 'Endereços Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Endereços Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Endereco" tipos={enderecosRecorte} tipologia zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Status"
                options={({ navigation }) => ({
                    title: 'Status Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Status Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Status" tipos={statusRecorte} tipologia zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Mapa"
                component={MapaRecorte}
                options={({ navigation }) => ({
                    title: 'Mapa Recorte',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Mapa Recorte</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="GraficoPoliticaPublica"
                component={GraficoPoliticaPublica}
                options={({ navigation }) => ({
                    title: 'Esculturas Urbanas',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Esculturas Urbanas</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="MapaTodasXRecorte"
                component={MapaTodasXRecorte}
                options={({ navigation }) => ({
                    title: 'Todas as Obras x Arte Pública',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Todas as Obras x Arte Pública</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Decade"
                component={Decade}
                options={({ navigation }) => ({
                    title: 'Décadas',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Décadas</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="Exposicoes"
                component={Exposicoes}
                options={({ navigation }) => ({
                    title: 'Exposições',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Exposições</Text>,
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
                {(props) => <MandatoPrefeito {...props} obras={obrasRecorte} />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Prefeitos"
                options={({ navigation }) => ({
                    title: 'Prefeitos',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Prefeitos</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="todas-obras-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            >
                {(props) => <Prefeitos {...props} obras={obrasRecorte} />}
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

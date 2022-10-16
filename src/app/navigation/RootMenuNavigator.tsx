import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';

import { Home, GraficoPoliticaPublica, ObrasRecorte, MapaRecorte, Decade, Exposicoes, MandatoPrefeito, Prefeitos } from '@pages';
import { autoresRecorte, enderecosRecorte, statusRecorte, tipologiasRecorte, useTheme, zonasRecorte, obrasRecorte } from '@utils';

import HeaderLeft from './HeaderLeft';
import HeaderTitle from './HeaderTitle';
import { TipoMenuNavigator, TipoMenuNavigatorParamList } from './TipoMenuNavigator';

const DrawerNavigator = createDrawerNavigator<RootMenuNavigatorParamsList>();

export type RootMenuNavigatorParamsList = {
    Home: undefined;
    Obras: undefined;
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

type RootMenuNavigatorProps = {
    testOnly_initialRouteName?: keyof RootMenuNavigatorParamsList;
};

export function RootMenuNavigator({ testOnly_initialRouteName }: RootMenuNavigatorProps): JSX.Element {
    const { theme } = useTheme();
    const { width } = useWindowDimensions();

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
                component={Home}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            />
            <DrawerNavigator.Screen
                name="Obras"
                component={ObrasRecorte}
                options={({ navigation }) => ({
                    title: 'Obras',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            />
            <DrawerNavigator.Screen
                name="Tipologias"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Tipologia" tipos={tipologiasRecorte} zona decada mapa />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Autores"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Autor" tipos={autoresRecorte} tipologia rede zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Zonas"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Zona" tipos={zonasRecorte} tipologia />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Enderecos"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Endereco" tipos={enderecosRecorte} tipologia zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Status"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => <TipoMenuNavigator {...props} tipo="Status" tipos={statusRecorte} tipologia zona />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Mapa"
                component={MapaRecorte}
                options={({ navigation }) => ({
                    title: 'Mapa',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            />
            <DrawerNavigator.Screen
                name="GraficoPoliticaPublica"
                component={GraficoPoliticaPublica}
                options={({ navigation }) => ({
                    title: 'Esculturas Urbanas',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            />
            <DrawerNavigator.Screen
                name="Decade"
                component={Decade}
                options={({ navigation }) => ({
                    title: 'Décadas',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            />
            <DrawerNavigator.Screen
                name="Exposicoes"
                component={Exposicoes}
                options={({ navigation }) => ({
                    title: 'Exposições',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            />
            <DrawerNavigator.Screen
                name="MandatoPrefeito"
                options={({ navigation }) => ({
                    title: 'Mandato Prefeito',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => <MandatoPrefeito {...props} obras={obrasRecorte} />}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Prefeitos"
                options={({ navigation }) => ({
                    title: 'Prefeitos',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => <Prefeitos {...props} obras={obrasRecorte} />}
            </DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
    );
}

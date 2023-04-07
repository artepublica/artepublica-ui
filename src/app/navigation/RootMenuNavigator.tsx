import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';

import { About, Decade, Glossary, Tipo_Decada, Tipo_GraficoRedeTipologiaObra } from '@pages';
import { autoresRecorte, useTheme } from '@utils';

import DrawerContent from './DrawerContent';
import HeaderLeft from './HeaderLeft';
import HeaderTitle from './HeaderTitle';
import HomeNavigator, { HomeNavigatorParamList } from './HomeNavigator';
import PreveitosNavigator, { PrefeitosNavigatorParamList } from './PrefeitosNavigator';
import SafeView from './SafeView';

const DrawerNavigator = createDrawerNavigator<RootMenuNavigatorParamsList>();

export type RootMenuNavigatorParamsList = {
    Home: NavigatorScreenParams<HomeNavigatorParamList>;
    Sobre: undefined;
    Glossario: undefined;
    Analises_Tipologia: undefined;
    Analises_Autores: undefined;
    Analises_Prefeitos: NavigatorScreenParams<PrefeitosNavigatorParamList>;
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
            drawerContent={DrawerContent}
        >
            <DrawerNavigator.Screen
                name="Home"
                options={({ navigation }) => ({
                    title: 'Home',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => (
                    <SafeView>
                        <HomeNavigator {...props} />
                    </SafeView>
                )}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Sobre"
                options={({ navigation }) => ({
                    title: 'Sobre',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => (
                    <SafeView>
                        <About {...props} />
                    </SafeView>
                )}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Glossario"
                options={({ navigation }) => ({
                    title: 'Glossário',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => (
                    <SafeView>
                        <Glossary {...props} />
                    </SafeView>
                )}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Analises_Tipologia"
                options={({ navigation }) => ({
                    title: 'Análises-Tipologia',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => (
                    <SafeView>
                        <Tipo_Decada {...props} tipo="Tipologia" />
                    </SafeView>
                )}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Analises_Autores"
                options={({ navigation }) => ({
                    title: 'Análises-Autores',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => (
                    <SafeView>
                        <Tipo_GraficoRedeTipologiaObra {...props} tipo="Autor" tipos={autoresRecorte} />
                    </SafeView>
                )}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Analises_Prefeitos"
                options={({ navigation }) => ({
                    title: 'Análises-Prefeitos',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => (
                    <SafeView>
                        <PreveitosNavigator {...props} />
                    </SafeView>
                )}
            </DrawerNavigator.Screen>
            <DrawerNavigator.Screen
                name="Analises_Decadas"
                options={({ navigation }) => ({
                    title: 'Análises-Décadas',
                    headerShown: true,
                    headerTitleAlign: width > 750 ? 'center' : 'left',
                    headerTitle: () => <HeaderTitle />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            >
                {(props) => (
                    <SafeView>
                        <Decade {...props} />
                    </SafeView>
                )}
            </DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
    );
}

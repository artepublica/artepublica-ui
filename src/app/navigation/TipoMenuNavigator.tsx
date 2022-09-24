import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import { Obra } from '@domain';
import { Tipo, Tipo_Decada, Tipo_GraficoRedeTipologiaObra, Tipo_Mapa, Tipo_TabelaTipologiaObra } from '@pages';
import { Theme, useTheme } from '@utils';

const TopTab = createMaterialTopTabNavigator<TipoMenuNavigatorParamList>();

export type TipoMenuNavigatorParamList = {
    Home: undefined;
    TabelaTipologiaObra: undefined;
    GraficoRedeTipologiaObra: undefined;
    Mapa: undefined;
    Decada: undefined;
};

type TipoMenuNavigatorProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
    tipologia?: boolean;
    zona?: boolean;
    rede?: boolean;
    mapa?: boolean;
    decada?: boolean;
};

export function TipoMenuNavigator({ tipo, tipos, tipologia, zona, rede, mapa, decada }: TipoMenuNavigatorProps): JSX.Element {
    const { theme } = useTheme();

    const style = styles(theme);

    return (
        <TopTab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: theme.navigation.active,
                tabBarInactiveTintColor: theme.navigation.inactive,
                swipeEnabled: false,
            })}
        >
            <TopTab.Screen
                name="Home"
                options={{
                    title: 'Home',
                    //headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <AntDesign name="home" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            >
                {(props) => <Tipo {...props} tipos={tipos} />}
            </TopTab.Screen>
            <TopTab.Screen
                name="TabelaTipologiaObra"
                options={{
                    title: 'Tabela',
                    //headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome name="object-ungroup" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            >
                {(props) => <Tipo_TabelaTipologiaObra {...props} tipo={tipo} tipos={tipos} tipologia={tipologia} zona={zona} />}
            </TopTab.Screen>
            {rede === true && (
                <TopTab.Screen
                    name="GraficoRedeTipologiaObra"
                    options={{
                        title: ' Tipologia/Obra',
                        //headerShown: false,
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome name="object-group" size={24} color={color} />;
                        },
                        tabBarLabelStyle: style.tabBarLabel,
                    }}
                >
                    {(props) => <Tipo_GraficoRedeTipologiaObra {...props} tipo={tipo} tipos={tipos} />}
                </TopTab.Screen>
            )}
            {mapa === true && (
                <TopTab.Screen
                    name="Mapa"
                    options={{
                        title: 'Mapa',
                        //headerShown: false,
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome name="object-group" size={24} color={color} />;
                        },
                        tabBarLabelStyle: style.tabBarLabel,
                    }}
                >
                    {(props) => <Tipo_Mapa {...props} tipos={tipos} tipo={tipo} />}
                </TopTab.Screen>
            )}
            {decada === true && (
                <TopTab.Screen
                    name="Decada"
                    options={{
                        title: 'Década',
                        //headerShown: false,
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome name="object-group" size={24} color={color} />;
                        },
                        tabBarLabelStyle: style.tabBarLabel,
                    }}
                >
                    {(props) => <Tipo_Decada {...props} tipo={tipo} />}
                </TopTab.Screen>
            )}
        </TopTab.Navigator>
    );
}

function styles(theme: Theme) {
    return StyleSheet.create({
        tabBarLabel: {
            fontSize: theme.bottomTab.fontSize,
            lineHeight: theme.bottomTab.lineHeight,
        },
    });
}

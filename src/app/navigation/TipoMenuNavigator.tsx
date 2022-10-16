import { FontAwesome, Octicons, Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import { Obra } from '@domain';
import { Tipo_Decada, Tipo_GraficoRedeTipologiaObra, Tipo_Mapa, Tipo_TabelaTipologiaObra } from '@pages';
import { Theme, useTheme } from '@utils';

const TopTab = createMaterialTopTabNavigator<TipoMenuNavigatorParamList>();

export type TipoMenuNavigatorParamList = {
    Home: undefined;
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

function tipoLabel(tipo: string) {
    switch (tipo) {
        case 'Endereco': {
            return 'Endereços';
        }
        case 'Tipologia': {
            return 'Tipologias';
        }
        case 'Autor': {
            return 'Autores';
        }
        case 'Zona': {
            return 'Zonas';
        }
        default: {
            return tipo;
        }
    }
}

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
                    title: tipoLabel(tipo),
                    tabBarLabel: 'Tabela',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome name="table" size={24} color={color} />;
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
                        title: tipoLabel(tipo),
                        tabBarLabel: 'Tipologia/Obra',
                        tabBarIcon: ({ color }) => {
                            return <Fontisto name="graphql" size={24} color={color} />;
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
                        title: tipoLabel(tipo),
                        tabBarLabel: 'Mapa',
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome name="map" size={24} color={color} />;
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
                        title: tipoLabel(tipo),
                        tabBarLabel: 'Década',
                        tabBarIcon: ({ color }) => {
                            return <Octicons name="graph" size={24} color={color} />;
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

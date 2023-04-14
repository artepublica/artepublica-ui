import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import { ObrasRecorte, Tipo_Mapa } from '@pages';
import { Theme, useTheme, tipologiasRecorte } from '@utils';

const TopTab = createMaterialTopTabNavigator<HomeNavigatorParamList>();

export type HomeNavigatorParamList = {
    Mapa: undefined;
    Inventario: undefined;
};

function HomeNavigator(): JSX.Element {
    const { theme } = useTheme();

    const style = styles(theme);

    return (
        <TopTab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: theme.navigation.active,
                tabBarInactiveTintColor: theme.navigation.inactive,
                tabBarIndicatorStyle: { backgroundColor: theme.navigation.active },
                tabBarIndicatorContainerStyle: { backgroundColor: '#FFC003', height: '100%' },
                swipeEnabled: false,
            })}
        >
            <TopTab.Screen
                name="Mapa"
                options={{
                    //title: tipoLabel(tipo),
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome name="map" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            >
                {(props) => <Tipo_Mapa {...props} tipos={tipologiasRecorte} tipo="Tipologia" />}
            </TopTab.Screen>
            <TopTab.Screen
                name="Inventario"
                component={ObrasRecorte}
                options={{
                    //title: tipoLabel(tipo),
                    tabBarLabel: 'Listagem',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome name="table" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
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

export default HomeNavigator;

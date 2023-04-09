import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import { MandatoPrefeito, Prefeitos } from '@pages';
import { Theme, useTheme, obrasRecorte } from '@utils';

const TopTab = createMaterialTopTabNavigator<PrefeitosNavigatorParamList>();

export type PrefeitosNavigatorParamList = {
    Mandato: undefined;
    Comparacao: undefined;
};

function PrefeitosNavigator(): JSX.Element {
    const { theme } = useTheme();

    const style = styles(theme);

    return (
        <TopTab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: theme.navigation.active,
                tabBarInactiveTintColor: theme.navigation.inactive,
                swipeEnabled: false,
                tabBarIndicatorContainerStyle: { backgroundColor: '#FFC003', height: '100%' },
            })}
        >
            <TopTab.Screen
                name="Mandato"
                options={{
                    title: 'Mandato',
                    tabBarLabel: 'Mandato',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome name="table" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            >
                {(props) => <MandatoPrefeito {...props} obras={obrasRecorte} />}
            </TopTab.Screen>
            <TopTab.Screen
                name="Comparacao"
                options={{
                    title: 'Comparação',
                    tabBarLabel: 'Comparação',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome name="table" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            >
                {(props) => <Prefeitos {...props} obras={obrasRecorte} />}
            </TopTab.Screen>
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

export default PrefeitosNavigator;

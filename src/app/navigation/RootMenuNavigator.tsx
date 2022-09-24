import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { Home } from '@pages';
import { Theme, useTheme } from '@utils';

import { ObrasNavigator, ObrasNavigatorParamsList } from './ObrasNavigator';
import { ObrasRecorteNavigator, ObrasRecorteNavigatorParamsList } from './ObrasRecorteNavigator';

const RootTab = createBottomTabNavigator<RootMenuNavigatorParamList>();

export type RootMenuNavigatorParamList = {
    Home: undefined;
    Obras: NavigatorScreenParams<ObrasNavigatorParamsList>;
    Recorte: NavigatorScreenParams<ObrasRecorteNavigatorParamsList>;
};

export function RootMenuNavigator(): JSX.Element {
    const { theme } = useTheme();

    const style = styles(theme);

    return (
        <RootTab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: theme.navigation.active,
                tabBarInactiveTintColor: theme.navigation.inactive,
                lazy: true,
            })}
        >
            <RootTab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }: { color: string }) => {
                        return <AntDesign name="home" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
            <RootTab.Screen
                name="Obras"
                component={ObrasNavigator}
                options={{
                    title: 'Obras',
                    headerShown: false,
                    tabBarIcon: ({ color }: { color: string }) => {
                        return <FontAwesome name="object-ungroup" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
            <RootTab.Screen
                name="Recorte"
                component={ObrasRecorteNavigator}
                options={{
                    title: 'Recorte',
                    headerShown: false,
                    tabBarIcon: ({ color }: { color: string }) => {
                        return <FontAwesome name="object-group" size={24} color={color} />;
                    },
                    tabBarLabelStyle: style.tabBarLabel,
                }}
            />
        </RootTab.Navigator>
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

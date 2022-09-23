import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { Charts, PublicArtTotal19892000 } from '@pages';
import { Theme, useTheme } from '@utils';

const DrawerNavigator = createDrawerNavigator<ChartsNavigatorParamsList>();

export type ChartsNavigatorParamsList = {
    Home: undefined;
    PublicArtC19892000: undefined;
};

type ChartsNavigatorProps = {
    testOnly_initialRouteName?: keyof ChartsNavigatorParamsList;
};

export function ChartsNavigator({ testOnly_initialRouteName }: ChartsNavigatorProps): JSX.Element {
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
                component={Charts}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Charts Home</Text>,
                    headerLeft: () => (
                        <TouchableOpacity testID="home-menu" style={{ paddingLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <DrawerNavigator.Screen
                name="PublicArtC19892000"
                component={PublicArtTotal19892000}
                options={({ navigation }) => ({
                    title: 'Arte Pública - 1989/2000',
                    headerShown: true,
                    headerTitle: () => <Text style={style.title}>Arte Pública - 1989/2000</Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            testID="tipologias-por-decada-menu"
                            style={{ paddingLeft: 16 }}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Entypo name="menu" size={24} color={theme.navigation.active} />
                        </TouchableOpacity>
                    ),
                })}
            />
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

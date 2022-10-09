import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Obra } from '@domain';
import { NotFound, NoMatch, Obra as ObraView } from '@pages';
import { useTheme } from '@utils';

import NavigationModal from './modal/NavigationModal.wip';
import navigationModalOptions from './modal/navigationModalOptions.wip';
import { RootMenuNavigator, RootMenuNavigatorParamList } from './RootMenuNavigator';

export type RootNavigatorParamList = {
    BottomTab: NavigatorScreenParams<RootMenuNavigatorParamList>;
    Obra: { obra: Obra };
    NotFound: undefined;
    NoMatch: undefined;
};

const StackNavigator = createStackNavigator<RootNavigatorParamList>();

export function RootNavigator(): JSX.Element {
    const { theme } = useTheme();
    const { height } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            }}
        >
            <StackNavigator.Screen name="BottomTab" component={RootMenuNavigator} options={{ headerShown: false }} />
            {/*Platform.OS === 'web' ? (
                <StackNavigator.Screen name="BottomTab" component={RootMenuNavigator} options={{ headerShown: false }} />
            ) : (
                <StackNavigator.Screen name="BottomTab" component={RootMenuNavigatorTop} />
            )*/}
            <StackNavigator.Screen
                name="Obra"
                component={NavigationModal({ Component: ObraView, modalHeight: '75%' })}
                options={({ navigation }) => navigationModalOptions(navigation, theme, height, insets, '75%', 'Obra')}
            />
            <StackNavigator.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
            <StackNavigator.Screen name="NoMatch" component={NoMatch} options={{ headerShown: false }} />
        </StackNavigator.Navigator>
    );
}

import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import { NotFound, NoMatch } from '@pages';

import { RootMenuNavigator, RootMenuNavigatorParamList } from './RootMenuNavigator';

export type RootNavigatorParamList = {
    BottomTab: NavigatorScreenParams<RootMenuNavigatorParamList>;
    NotFound: undefined;
    NoMatch: undefined;
};

const StackNavigator = createStackNavigator<RootNavigatorParamList>();

export function RootNavigator(): JSX.Element {
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
            <StackNavigator.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
            <StackNavigator.Screen name="NoMatch" component={NoMatch} options={{ headerShown: false }} />
        </StackNavigator.Navigator>
    );
}

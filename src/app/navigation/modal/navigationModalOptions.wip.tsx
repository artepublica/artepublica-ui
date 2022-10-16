import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, StackActions } from '@react-navigation/native';
import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { Theme } from '@utils';

import { RootMenuNavigatorParamsList } from '../RootMenuNavigator';
import calculateNavigationModalHeight from './calculateNavigationModalHeight.wip';

function webOptions(navigation: NavigationProp<RootMenuNavigatorParamsList>, theme: Theme, headerTitle?: string): StackNavigationOptions {
    const style = styles(theme);
    return {
        headerShown: true,
        headerTitle: () => <Text style={style.headerTitle}>{headerTitle}</Text>,
        headerLeft: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.canGoBack()
                        ? navigation.goBack()
                        : navigation.dispatch(
                              StackActions.push('Authorized', { screen: 'RootMenuNavigator', params: { screen: 'Home', params: { transition: 'vertical' } } }),
                          )
                }
                style={{ paddingLeft: 16 }}
            >
                <AntDesign name="arrowleft" size={24} color={theme.navigation.primary} />
            </TouchableOpacity>
        ),
    };
}

function styles(theme: Theme) {
    return StyleSheet.create({
        headerTitle: {
            fontSize: 20,
            lineHeight: 32,
            fontFamily: theme.fonts.medium.fontFamily,
        },
    });
}

function mobileOptions(height: number, insets: EdgeInsets, modalHeight?: '25%' | '50%' | '75%' | '100%' | number): StackNavigationOptions {
    return {
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        cardStyleInterpolator: (_ref2) => {
            const cardStyleInterpolator =
                Platform.OS === 'ios'
                    ? TransitionPresets.ModalSlideFromBottomIOS.cardStyleInterpolator(_ref2)
                    : TransitionPresets.FadeFromBottomAndroid.cardStyleInterpolator(_ref2);
            return {
                ...cardStyleInterpolator,
                overlayStyle: {
                    opacity: _ref2.current.progress.interpolate({
                        inputRange: [
                            0,
                            1.5,
                        ],
                        outputRange: [
                            0,
                            0.5,
                        ],
                        extrapolate: 'clamp',
                    }),
                },
            };
        },
        headerShown: false,
        presentation: 'transparentModal',
        gestureResponseDistance: height - calculateNavigationModalHeight(height, insets, modalHeight) - insets.top + insets.bottom,
        animationEnabled: true,
    };
}

function navigationModalOptions(
    navigation: NavigationProp<RootMenuNavigatorParamsList>,
    theme: Theme,
    height: number,
    insets: EdgeInsets,
    modalHeight?: '25%' | '50%' | '75%' | '100%' | number,
    headerTitle?: string,
    forceModal?: boolean,
): StackNavigationOptions {
    return Platform.OS !== 'web' || forceModal ? mobileOptions(height, insets, modalHeight) : webOptions(navigation, theme, headerTitle);
}

export default navigationModalOptions;

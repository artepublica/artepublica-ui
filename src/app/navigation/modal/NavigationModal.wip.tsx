import { FunctionComponent } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, RouteProp, StackActions } from '@react-navigation/native';
import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';

import { RootNavigatorParamList } from '../RootNavigator';
import calculateNavigationModalHeight from './calculateNavigationModalHeight.wip';

type NavigationModalProps = {
    Component: FunctionComponent<{ route: RouteProp<RootNavigatorParamList> }>;
    modalHeight?: '25%' | '50%' | '75%' | '100%' | number;
    forceModal?: boolean;
};

function WebModal({
    Component,
}: NavigationModalProps): FunctionComponent<{ route: RouteProp<RootNavigatorParamList>; navigation: NavigationProp<RootNavigatorParamList> }> {
    return (props) => {
        return <Component {...props} />;
    };
}

function MobileModal({
    Component,
    modalHeight,
}: NavigationModalProps): FunctionComponent<{ route: RouteProp<RootNavigatorParamList>; navigation: NavigationProp<RootNavigatorParamList> }> {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const { height } = useWindowDimensions();

    return (props) => {
        let backgroundColor = theme.background;
        if (props.route.name === 'Obra') {
            const params = props.route.params as { obra: Obra };

            backgroundColor = theme.tipologia[params.obra.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme] ?? theme.tipologia.desconhecida;
        }
        function goBack(): void {
            if (props.navigation.canGoBack()) {
                props.navigation.goBack();
            } else {
                props.navigation.dispatch(
                    StackActions.push('Authorized', { screen: 'RootMenuNavigator', params: { screen: 'Home', params: { transition: 'vertical' } } }),
                );
            }
        }
        return (
            <SafeAreaView style={style.safeView}>
                <View
                    style={{
                        backgroundColor: backgroundColor ?? theme.background,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        marginBottom: -insets.bottom,
                    }}
                >
                    <View
                        style={{
                            height: calculateNavigationModalHeight(height, insets, modalHeight),
                            width: '100%',
                            marginBottom: insets.bottom,
                        }}
                    >
                        <TouchableOpacity style={style.closeButton} onPress={goBack}>
                            <Ionicons name="ios-chevron-down" size={24} color="#FFF" on />
                        </TouchableOpacity>
                        <Component {...props} />
                    </View>
                </View>
            </SafeAreaView>
        );
    };
}

function NavigationModal({
    Component,
    modalHeight,
    forceModal,
}: NavigationModalProps): FunctionComponent<{ route: RouteProp<RootNavigatorParamList>; navigation: NavigationProp<RootNavigatorParamList> }> {
    return Platform.OS !== 'web' || forceModal ? MobileModal({ Component, modalHeight }) : WebModal({ Component });
}

export default NavigationModal;

const style = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    closeButton: {
        alignSelf: 'center',
        paddingTop: 8,
        cursor: 'pointer',
    },
});

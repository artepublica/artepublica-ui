import { StatusBar } from 'expo-status-bar';
import { Image, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { useTheme } from '@utils';

import NavigationContainer from './NavigationContainer';
import { RootNavigator } from './RootNavigator';

function NavigationProvider(): JSX.Element {
    const { width } = useWindowDimensions();
    const { theme } = useTheme();

    const defaultM = width / 422;
    const multiplicador =
        width <= 422 && width > 350
            ? defaultM
            : width <= 350 && width > 310
            ? 0.95 * defaultM
            : width <= 310 && width > 275
            ? 0.9 * defaultM
            : width <= 275 && width > 250
            ? 0.85 * defaultM
            : width <= 250
            ? 0.8 * defaultM
            : 1;

    return (
        <View style={{ flex: 1, overflow: 'hidden', backgroundColor: theme.navigation.active }}>
            <StatusBar translucent backgroundColor={theme.navigation.active} />
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
            <SafeAreaView style={{ width: '100%' }} edges={['bottom']}>
                <View style={{ width: '100%', height: 48, backgroundColor: '#FFC003', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#CC1964', paddingTop: 16, paddingLeft: 12 }}>Apoio:</Text>
                    <View style={{ paddingTop: 12 + (24 - multiplicador * 24) / 2, paddingLeft: 8 }}>
                        <Image source={require('@assets/logos/UFRJ.png')} style={{ width: multiplicador * 60, height: multiplicador * 24 }} />
                    </View>
                    <View style={{ paddingTop: 12 + (24 - multiplicador * 24) / 2, paddingLeft: 8 }}>
                        <Image source={require('@assets/logos/FAU.png')} style={{ width: multiplicador * 99, height: multiplicador * 24 }} />
                    </View>
                    <View style={{ paddingTop: 12 + (24 - multiplicador * 24) / 2, paddingLeft: 8 }}>
                        <Image source={require('@assets/logos//PROURB.png')} style={{ width: multiplicador * 93, height: multiplicador * 24 }} />
                    </View>
                    <View style={{ paddingTop: 12 + (24 - multiplicador * 24) / 2, paddingLeft: 8 }}>
                        <Image source={require('@assets/logos/cnpq.png')} style={{ width: multiplicador * 56, height: multiplicador * 24 }} />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default NavigationProvider;

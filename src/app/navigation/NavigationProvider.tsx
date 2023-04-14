import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';
import { useTheme } from '@utils';

import NavigationContainer from './NavigationContainer';
import { RootNavigator } from './RootNavigator';

function NavigationProvider(): JSX.Element {
    const { theme } = useTheme();

    return (
        <View style={{ flex: 1, overflow: 'hidden', backgroundColor: theme.navigation.active }}>
            <StatusBar translucent backgroundColor={theme.navigation.active} />
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
            <SafeAreaView style={{ width: '100%' }} edges={['bottom']}>
                <View style={{ width: '100%', height: 48, backgroundColor: '#FFC003', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#CC1964', paddingTop: 16, paddingLeft: 12 }}>Apoio:</Text>
                    <View style={{ paddingTop: 12, paddingLeft: 8 }}>
                        <Image source={require('@assets/logos/UFRJ.png')} style={{ width: 60, height: 24 }} />
                    </View>
                    <View style={{ paddingTop: 12, paddingLeft: 12 }}>
                        <Image source={require('@assets/logos/FAU.png')} style={{ width: 99, height: 24 }} />
                    </View>
                    <View style={{ paddingTop: 12, paddingLeft: 12 }}>
                        <Image source={require('@assets/logos//PROURB.png')} style={{ width: 93, height: 24 }} />
                    </View>
                    <View style={{ paddingTop: 12, paddingLeft: 12 }}>
                        <Image source={require('@assets/logos/cnpq.png')} style={{ width: 56, height: 24 }} />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default NavigationProvider;

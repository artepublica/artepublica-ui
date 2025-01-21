import 'react-native-reanimated';
import 'highcharts';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import CNPQLogo from '@assets/images/logos/cnpq.png';
import FAULogo from '@assets/images/logos/fau.png';
import PROURBLogo from '@assets/images/logos/prourb.png';
import UFRJLogo from '@assets/images/logos/ufrj.png';
import { ThemeContextProvider } from '@utils';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element {
  const { width } = useWindowDimensions();

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
    <ThemeContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='index' />
          <Stack.Screen name='(root)' />
          <Stack.Screen name='+not-found' />
        </Stack>
        <SafeAreaView style={{ width: '100%' }} edges={['bottom']}>
          <View
            style={{
              width: '100%',
              height: 48,
              backgroundColor: '#FFC003',
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#CC1964',
                paddingTop: 16,
                paddingLeft: 12,
              }}
            >
              Apoio:
            </Text>
            <View
              style={{
                paddingTop: 12 + (24 - multiplicador * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={UFRJLogo}
                style={{
                  width: multiplicador * 60,
                  height: multiplicador * 24,
                }}
              />
            </View>
            <View
              style={{
                paddingTop: 12 + (24 - multiplicador * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={FAULogo}
                style={{
                  width: multiplicador * 99,
                  height: multiplicador * 24,
                }}
              />
            </View>
            <View
              style={{
                paddingTop: 12 + (24 - multiplicador * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={PROURBLogo}
                style={{
                  width: multiplicador * 93,
                  height: multiplicador * 24,
                }}
              />
            </View>
            <View
              style={{
                paddingTop: 12 + (24 - multiplicador * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={CNPQLogo}
                style={{
                  width: multiplicador * 56,
                  height: multiplicador * 24,
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ThemeContextProvider>
  );
}

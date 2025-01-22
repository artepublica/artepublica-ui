import 'react-native-reanimated';
import 'highcharts';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cnpq, fau, prourb, ufrj } from '@logos';
import { ThemeContextProvider } from '@utils';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element {
  const { width } = useWindowDimensions();

  const defaultM = width / 422;
  const multiplier =
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
                paddingTop: 12 + (24 - multiplier * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={ufrj}
                style={{
                  width: multiplier * 60,
                  height: multiplier * 24,
                }}
              />
            </View>
            <View
              style={{
                paddingTop: 12 + (24 - multiplier * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={fau}
                style={{
                  width: multiplier * 99,
                  height: multiplier * 24,
                }}
              />
            </View>
            <View
              style={{
                paddingTop: 12 + (24 - multiplier * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={prourb}
                style={{
                  width: multiplier * 93,
                  height: multiplier * 24,
                }}
              />
            </View>
            <View
              style={{
                paddingTop: 12 + (24 - multiplier * 24) / 2,
                paddingLeft: 8,
              }}
            >
              <Image
                source={cnpq}
                style={{
                  width: multiplier * 56,
                  height: multiplier * 24,
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ThemeContextProvider>
  );
}

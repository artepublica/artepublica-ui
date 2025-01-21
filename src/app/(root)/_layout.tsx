import { ThemeProvider } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@utils';

import navigationModalOptions from '../../base-components/modal/navigationModalOptions';

export default function Layout(): JSX.Element {
  const { theme } = useTheme();
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: theme.navigation.active,
      }}
    >
      <StatusBar translucent backgroundColor={theme.navigation.active} />
      <View style={{ flex: 1 }}>
        <ThemeProvider
          value={{
            colors: theme.navigation,
            dark: theme.dark,
            fonts: theme.fonts,
          }}
        >
          <Stack>
            <Stack.Screen name='(menu)' options={{ headerShown: false }} />
            <Stack.Screen
              name='heritage'
              options={({ navigation }) =>
                navigationModalOptions(
                  navigation,
                  theme,
                  height,
                  insets,
                  Platform.OS === 'web' ? 300 : 280,
                  'Obra',
                  true,
                ) as NativeStackNavigationOptions
              }
            />
          </Stack>
        </ThemeProvider>
      </View>
    </View>
  );
}

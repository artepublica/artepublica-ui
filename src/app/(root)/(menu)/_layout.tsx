import React, { JSX } from 'react';

import { Drawer } from 'expo-router/drawer';
import { useWindowDimensions } from 'react-native';

import { DrawerContent, HeaderLeft, HeaderTitle } from '@base-components';
import { useTheme } from '@utils';

function Layout(): JSX.Element {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <Drawer
      initialRouteName='(home)'
      screenOptions={{
        drawerPosition: 'left',
        drawerActiveTintColor: theme.navigation.active,
        drawerInactiveTintColor: theme.navigation.inactive,
      }}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen
        name='(home)'
        options={({ navigation }) => ({
          title: 'Home',
          headerShown: true,
          headerTitleAlign: width > 750 ? 'center' : 'left',
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name='about'
        options={({ navigation }) => ({
          title: 'Sobre',
          headerShown: true,
          headerTitleAlign: width > 750 ? 'center' : 'left',
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name='glossary'
        options={({ navigation }) => ({
          title: 'Glossário',
          headerShown: true,
          headerTitleAlign: width > 750 ? 'center' : 'left',
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name='typology'
        options={({ navigation }) => ({
          title: 'Análises-Tipologia',
          headerShown: true,
          headerTitleAlign: width > 750 ? 'center' : 'left',
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name='authors'
        options={({ navigation }) => ({
          title: 'Análises-Autores',
          headerShown: true,
          headerTitleAlign: width > 750 ? 'center' : 'left',
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name='(mayors)'
        options={({ navigation }) => ({
          title: 'Análises-Prefeitos',
          headerShown: true,
          headerTitleAlign: width > 750 ? 'center' : 'left',
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name='decades'
        options={({ navigation }) => ({
          title: 'Análises-Décadas',
          headerShown: true,
          headerTitleAlign: width > 750 ? 'center' : 'left',
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Drawer>
  );
}

export default Layout;

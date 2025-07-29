import React, { JSX } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Theme, useTheme } from '@utils';

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function Layout(): JSX.Element {
  const { theme } = useTheme();

  const style = styles(theme);

  return (
    <MaterialTopTabs
      initialRouteName='map'
      screenOptions={() => ({
        tabBarActiveTintColor: theme.navigation.active,
        tabBarInactiveTintColor: theme.navigation.inactive,
        tabBarIndicatorStyle: { backgroundColor: theme.navigation.active },
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#FFC003',
          height: '100%',
        },
        swipeEnabled: false,
      })}
    >
      <MaterialTopTabs.Screen
        name='map'
        options={{
          title: 'Mapa',
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color }) => {
            return <FontAwesome name='map' size={24} color={color} />;
          },
          tabBarLabelStyle: style.tabBarLabel,
        }}
      />
      <MaterialTopTabs.Screen
        name='list'
        options={{
          title: 'Listagem',
          tabBarLabel: 'Listagem',
          tabBarIcon: ({ color }) => {
            return <FontAwesome name='table' size={24} color={color} />;
          },
          tabBarLabelStyle: style.tabBarLabel,
        }}
      />
    </MaterialTopTabs>
  );
}

function styles(theme: Theme) {
  return StyleSheet.create({
    tabBarLabel: {
      fontSize: theme.bottomTab.fontSize,
      lineHeight: theme.bottomTab.lineHeight,
    },
  });
}

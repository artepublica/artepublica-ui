import { useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  DrawerDescriptor,
  DrawerDescriptorMap,
  // eslint-disable-next-line import/no-unresolved
} from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@utils';

import { Text } from '../text';

function evaluateOuterDrawerListItems(
  routes: { name: string; key: string }[],
  descriptors: DrawerDescriptorMap,
) {
  const drawerItems: Record<
    string,
    { label: string; start: number; end: number }
  > = {};
  routes.forEach((route, index) => {
    const { name, key } = route;
    const { options } = descriptors[key];

    // Delimiter -
    const label = options.title!.substring(0, options.title!.indexOf('-'));
    if (label.length) {
      if (Object.hasOwn(drawerItems, label)) {
        drawerItems[label].end = index + 1;
      } else {
        const label = options.title!.substring(0, options.title!.indexOf('-'));
        drawerItems[label] = {
          label,
          start: index,
          end: index + 1,
        };
      }
    } else {
      drawerItems[name] = {
        label: options.title!,
        start: index,
        end: index,
      };
    }
  });
  return drawerItems;
}

function DrawerContent(props: DrawerContentComponentProps): JSX.Element {
  const { theme } = useTheme();
  const { state, descriptors } = props;

  const [internState, setInterState] = useState<{
    mainDrawer: boolean;
    currentComponent: string;
  }>({ mainDrawer: true, currentComponent: '' });

  const drawerItems = evaluateOuterDrawerListItems(state.routes, descriptors);
  const focusedRoute = state.routes[state.index];

  if (internState.mainDrawer) {
    return (
      <DrawerContentScrollView {...props}>
        {Object.keys(drawerItems).map((item) => {
          const drawerItem = drawerItems[item];
          if (drawerItem.start === drawerItem.end) {
            return (
              <DrawerItem
                key={item}
                label={drawerItem.label}
                focused={focusedRoute.name === item}
                onPress={() => props.navigation.navigate(item)}
              />
            );
          }

          const focusedRouteDescriptor = descriptors[focusedRoute.key];
          const focusedRouteTitle = focusedRouteDescriptor.options.title!;
          const focusedRouteName = focusedRouteTitle.substring(
            0,
            focusedRouteTitle.indexOf('-'),
          );

          return (
            <DrawerItem
              key={item}
              label={drawerItem.label}
              focused={item === focusedRouteName}
              onPress={() => {
                setInterState({
                  currentComponent: item,
                  mainDrawer: false,
                });
              }}
              style={{ marginLeft: 0 }}
              labelStyle={{ marginLeft: -12 }}
              icon={() => (
                <Entypo
                  name='arrow-with-circle-right'
                  size={20}
                  color='#ffffffAD'
                  style={styles.icon}
                />
              )}
            />
          );
        })}
      </DrawerContentScrollView>
    );
  }

  const index = drawerItems[internState.currentComponent];
  const routes = state.routes.slice(index.start, index.end);
  const descriptorsReduced = Object.keys(descriptors).reduce<
    Record<string, DrawerDescriptor>
  >((result, key) => {
    const route = routes.find((route) => route.key === key);
    if (route) {
      result[key] = descriptors[key];
    }
    return result;
  }, {});

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity
        onPress={() =>
          setInterState({
            mainDrawer: !internState.mainDrawer,
            currentComponent: '',
          })
        }
        style={styles.customDrawerTouch}
      >
        <View style={styles.backButtonRow}>
          <Entypo
            name='arrow-with-circle-left'
            size={25}
            color={theme.navigation.inactive}
            style={styles.customDrawerIcon}
          />
          <Text style={{ color: theme.navigation.inactive }}>Voltar</Text>
        </View>
      </TouchableOpacity>
      {Object.keys(descriptorsReduced).map((key) => {
        const route = routes.find((route) => route.key === key);
        const descriptor = descriptorsReduced[key];
        const label = descriptor.options.title!.substring(
          descriptor.options.title!.indexOf('-') + 1,
          descriptor.options.title!.length,
        );

        return (
          <DrawerItem
            key={key}
            label={label}
            focused={focusedRoute.name === route!.name}
            onPress={() => props.navigation.navigate(route!.name)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  customDrawerTouch: {
    paddingHorizontal: 13,
    paddingTop: 15,
  },
  customDrawerIcon: { paddingRight: 10 },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 16,
  },
});

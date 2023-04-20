/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerDescriptor, DrawerDescriptorMap } from '@react-navigation/drawer/lib/typescript/src/types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '@base-components';
import { useTheme } from '@utils';

function evaluateOuterDrawerListItems(routes: { name: string; key: string }[], descriptors: DrawerDescriptorMap) {
    const drawerItems: Record<string, { label: string; start: number; end: number }> = {};
    routes.forEach((route, index) => {
        const { name, key } = route;
        const { options } = descriptors[key];

        // Delimiter _
        const base_route_name = name.substr(0, name.indexOf('_'));
        if (base_route_name.length) {
            if (drawerItems.hasOwnProperty(base_route_name)) {
                drawerItems[base_route_name].end = index + 1;
            } else {
                const label = options.title!.substr(0, options.title!.indexOf('-'));
                drawerItems[base_route_name] = {
                    label,
                    start: index,
                    end: index + 1,
                };
            }
        } else {
            const label = options.title!.substr(0, options.title!.indexOf('-'));
            drawerItems[name] = {
                label: label !== '' ? label : options.title!,
                start: index,
                end: index,
            };
        }
    });
    return drawerItems;
}

function DrawerContent(props: DrawerContentComponentProps): JSX.Element {
    const { theme } = useTheme();
    const { state, ...restProps } = props;

    const [
        internState,
        setInterState,
    ] = useState<{ mainDrawer: boolean; currentComponent: string }>({ mainDrawer: true, currentComponent: '' });

    const drawerItems = evaluateOuterDrawerListItems(state.routes, restProps.descriptors);
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

                    const focusedRouteName = focusedRoute.name.substr(0, focusedRoute.name.indexOf('_'));
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
                            labelStyle={{ marginLeft: -24 }}
                            icon={() => <Entypo name="arrow-with-circle-right" size={20} color="#ffffffAD" style={styles.test} />}
                        />
                    );
                })}
            </DrawerContentScrollView>
        );
    }

    const index = drawerItems[internState.currentComponent];
    const routes = state.routes.slice(index.start, index.end);
    const descriptors = Object.keys(restProps.descriptors).reduce<Record<string, DrawerDescriptor>>((result, key) => {
        const route = routes.find((route) => route.key === key);
        if (route) {
            result[key] = restProps.descriptors[key];
        }
        return result;
    }, {});

    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity onPress={() => setInterState({ mainDrawer: !internState.mainDrawer, currentComponent: '' })} style={styles.customDrawerTouch}>
                <View style={styles.backButtonRow}>
                    <Entypo name="arrow-with-circle-left" size={25} color={theme.navigation.inactive} style={styles.customDrawerIcon} />
                    <Text style={{ color: theme.navigation.inactive }}>Voltar</Text>
                </View>
            </TouchableOpacity>
            {Object.keys(descriptors).map((key) => {
                const route = routes.find((route) => route.key === key);
                const descriptor = descriptors[key];
                const label = descriptor.options.title!.substr(descriptor.options.title!.indexOf('-') + 1, descriptor.options.title!.length - 1);

                return (
                    <DrawerItem key={key} label={label} focused={focusedRoute.name === route!.name} onPress={() => props.navigation.navigate(route!.name)} />
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
    test: {
        alignSelf: 'center',
        position: 'absolute',
        right: 5,
    },
});

import { Entypo } from '@expo/vector-icons';
import { DrawerActions, NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { Text } from '@base-components';
import { useTheme } from '@utils';

import { RootNavigatorParamList } from './RootNavigator';

function HeaderLeft({ navigation }: { navigation: NavigationProp<RootNavigatorParamList> }): JSX.Element {
    const { theme } = useTheme();
    const { width } = useWindowDimensions();
    return (
        <TouchableOpacity testID="home-menu" style={{ paddingLeft: 16, flexDirection: 'row' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Entypo name="menu" size={40} color={theme.navigation.active} />
            {width > 750 && (
                <View style={{ justifyContent: 'center', paddingLeft: 8 }}>
                    <Text>Menu</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

export default HeaderLeft;

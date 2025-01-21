import { Entypo } from '@expo/vector-icons';
import { DrawerActions, NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { useTheme } from '@utils';

import { Text } from '../text';

function HeaderLeft<T extends object>({
  navigation,
}: {
  navigation: NavigationProp<T>;
}): JSX.Element {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{ paddingLeft: 16, flexDirection: 'row' }}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Entypo name='menu' size={40} color={theme.navigation.text} />
      {width > 750 && (
        <View style={{ justifyContent: 'center', paddingLeft: 8 }}>
          <Text>Menu</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default HeaderLeft;

import { JSX } from 'react';

import { Image, Platform, StyleSheet, View } from 'react-native';

import { icon } from '@logos';
import { Theme, useTheme } from '@utils';

import { Text } from '../text';

function HeaderTitle(): JSX.Element {
  const { theme } = useTheme();

  const style = styles(theme);

  const iconSize = Platform.OS === 'web' ? 40 : 30;
  return (
    <View style={{ flexDirection: 'column', marginLeft: -4 }}>
      <View style={{ flexDirection: 'row', marginTop: -4 }}>
        <Image source={icon} style={{ height: iconSize, width: iconSize }} />
        <View style={{ paddingTop: 0, justifyContent: 'flex-end' }}>
          <Text style={style.title}>Arte Pública</Text>
        </View>
      </View>
      <View style={{ paddingLeft: 4 }}>
        <Text style={style.subTitle}>Obras permanentes no Rio de Janeiro</Text>
      </View>
    </View>
  );
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    title: {
      fontSize: 20,
      color: theme.navigation.text,
    },
    subTitle: {
      fontSize: 10,
      color: theme.navigation.text,
    },
  });
};

export default HeaderTitle;

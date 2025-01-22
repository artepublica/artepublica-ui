import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';

import { Theme, useTheme } from '@utils';

type TextProps = {
  testID?: string;
  children?: string | number | (string | number)[] | null;
  numberOfLines?: number;
  style?: TextStyle | TextStyle[];
};

function Text({ testID, children, numberOfLines, style }: TextProps): JSX.Element {
  const { theme } = useTheme();

  const textStyle = styles(theme);

  return (
    <NativeText testID={testID} numberOfLines={numberOfLines} style={[textStyle.text, style]} selectable>
      {children}
    </NativeText>
  );
}

export default Text;

function styles(theme: Theme) {
  return StyleSheet.create({
    text: {
      fontFamily: theme.text.font.fontFamily,
      color: theme.text.textColor,
    },
  });
}

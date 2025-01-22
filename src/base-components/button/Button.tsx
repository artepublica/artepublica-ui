import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';

import { Theme, useTheme } from '@utils';

export type ButtonProps = {
  children?: string;
  onPress?: (event: GestureResponderEvent) => void;
  testOnly_pressed?: boolean;
};

function Button({ children, onPress, testOnly_pressed }: ButtonProps): JSX.Element {
  const { theme } = useTheme();

  const style = styles(theme);

  const button = (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style.button, pressed && style.pressed]}
      testOnly_pressed={testOnly_pressed}
    >
      <Text>{children?.toLowerCase()}</Text>
    </Pressable>
  );

  return button;
}

function styles(theme: Theme) {
  return StyleSheet.create({
    button: {
      fontFamily: theme.button.font.fontFamily,
      color: theme.button.textColor,
      borderWidth: 1,
      borderColor: theme.button.borderColor,
      borderRadius: 8,
      backgroundColor: theme.button.backgroundColor,
      padding: 16,
    },
    pressed: {
      color: theme.button.pressed.textColor,
      borderColor: theme.button.pressed.borderColor,
      backgroundColor: theme.button.pressed.backgroundColor,
    },
  });
}

export default Button;

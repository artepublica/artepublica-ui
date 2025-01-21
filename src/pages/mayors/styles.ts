import { StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
};

function styles(): Styles {
  return StyleSheet.create<Styles>({
    container: { paddingTop: 12, paddingHorizontal: 12 },
  });
}

export default styles;

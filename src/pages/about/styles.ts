import { StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
};

function styles(): Styles {
  return StyleSheet.create<Styles>({
    container: {
      flexGrow: 1,
      backgroundColor: '#CC1964',
    },
  });
}

export default styles;

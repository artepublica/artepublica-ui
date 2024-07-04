import { StyleSheet, TextStyle } from 'react-native';

type Styles = {
  total: TextStyle;
};

function styles(): Styles {
  return StyleSheet.create<Styles>({
    total: {
      width: 100,
    },
  });
}

export default styles;

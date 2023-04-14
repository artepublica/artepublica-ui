import { ViewStyle, StyleSheet } from 'react-native';

type Styles = {
    container: ViewStyle;
    row: ViewStyle;
    col: ViewStyle;
};

function styles(): Styles {
    return StyleSheet.create<Styles>({
        container: {
            flex: 1,
        },
        row: {
            backgroundColor: '#FFFFFF',
            width: '100%',
        },
        col: {
            backgroundColor: '#FFFFFF',
            marginBottom: 16,
        },
    });
}

export default styles;

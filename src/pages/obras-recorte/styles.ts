import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

type Styles = {
    container: ViewStyle;
    row: ViewStyle;
    col: ViewStyle;
    rowText: TextStyle;
};

function styles(): Styles {
    return StyleSheet.create<Styles>({
        container: {
            flex: 1,
            paddingTop: 12,
        },
        row: {
            backgroundColor: '#FFFFFF',
            width: '100%',
            paddingBottom: 8,
        },
        col: {
            backgroundColor: '#FFFFFF',
            minWidth: 136,
            maxWidth: 136,
        },
        rowText: {
            fontFamily: 'Arial',
            fontSize: 11,
            lineHeight: 17,
            color: '#000000',
            padding: 4,
        },
    });
}

export default styles;

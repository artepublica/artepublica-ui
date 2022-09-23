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
        },
        row: {
            backgroundColor: '#FFFFFF',
            flex: null as unknown as number,
        },
        col: {
            backgroundColor: '#FFFFFF',
            marginBottom: 8,
        },
        rowText: {
            fontFamily: 'Arial',
            fontSize: 11,
            lineHeight: 17,
            color: '#000000',
            padding: 4,
            //userSelect: 'auto',
        },
    });
}

export default styles;

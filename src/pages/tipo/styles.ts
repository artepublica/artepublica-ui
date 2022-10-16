import { ViewStyle, StyleSheet } from 'react-native';

type Styles = {
    container: ViewStyle;
};

function styles(): Styles {
    return StyleSheet.create<Styles>({
        container: {
            paddingTop: 12,
            paddingHorizontal: 12,
            width: '100%',
        },
    });
}

export default styles;

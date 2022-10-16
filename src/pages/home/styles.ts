import { ViewStyle, StyleSheet } from 'react-native';

type Styles = {
    container: ViewStyle;
};

function styles(): Styles {
    return StyleSheet.create<Styles>({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 12,
            paddingHorizontal: 12,
        },
    });
}

export default styles;

import { Image, View, StyleSheet, Platform } from 'react-native';

import { Text } from '@base-components';

function HeaderTitle(): JSX.Element {
    const iconSize = Platform.OS === 'web' ? 40 : 30;
    return (
        <View style={{ flexDirection: 'column', marginLeft: -4 }}>
            <View style={{ flexDirection: 'row', marginTop: -4 }}>
                <Image source={require('@assets/icon.png')} style={{ height: iconSize, width: iconSize }} />
                <View style={{ paddingTop: 0, justifyContent: 'flex-end' }}>
                    <Text style={style.title}>Arte Pública</Text>
                </View>
            </View>
            <View style={{ paddingLeft: 4 }}>
                <Text style={style.subTitle}>Obras permanentes no Rio de Janeiro</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    subTitle: {
        fontSize: 10,
    },
});

export default HeaderTitle;

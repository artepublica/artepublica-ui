import { StackActions, useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import { Button, Text } from '@base-components';

function NotFound(): JSX.Element {
    const navigation = useNavigation();

    function goHome() {
        navigation.dispatch(StackActions.push('RootMenuNavigator', { screen: 'Home' }));
    }

    return (
        <View style={styles.container}>
            <Text>404 not found</Text>
            <Button onPress={goHome}>go to home</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NotFound;

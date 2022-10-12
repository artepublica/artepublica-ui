import { StackActions, useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Text } from '@base-components';

function NotFound(): JSX.Element {
    const navigation = useNavigation();

    function goHome() {
        navigation.dispatch(StackActions.push('RootMenuNavigator', { screen: 'Home' }));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>404 not found</Text>
            <Button onPress={goHome}>go to home</Button>
        </SafeAreaView>
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

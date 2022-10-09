import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@base-components';

import styles from './styles';

function Home(): JSX.Element {
    const style = styles();

    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', padding: 8 }}>
                <Text>Aline Rayane de Oliveira</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

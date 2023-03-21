import { ScrollView } from 'react-native';

import { Text } from '@base-components';

import styles from './styles';

function Home(): JSX.Element {
    const style = styles();
    return (
        <ScrollView contentContainerStyle={style.container}>
            <Text>Aline Rayane de Oliveira</Text>
        </ScrollView>
    );
}

export default Home;

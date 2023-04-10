import { ScrollView } from 'react-native';

import { Text } from '@base-components';

import styles from './styles';

function Glossary(): JSX.Element {
    const style = styles();
    return (
        <ScrollView contentContainerStyle={style.container}>
            <Text>Em Construção</Text>
        </ScrollView>
    );
}

export default Glossary;

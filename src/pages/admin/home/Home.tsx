import { ScrollView } from 'react-native';

import { Text } from '@base-components';

import styles from './styles';
import { useAuthContext } from '../../..//providers/auth/AuthProvider';

function Home(): JSX.Element {
    const style = styles();

    const { user } = useAuthContext();
    return (
        <ScrollView contentContainerStyle={style.container}>
            <Text>{user?.email}</Text>
            <Text>{user?.roles}</Text>
        </ScrollView>
    );
}

export default Home;

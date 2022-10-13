import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeContextProvider } from '@utils';

import { NavigationProvider } from './navigation';

function App(): JSX.Element {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
            <ThemeContextProvider>
                <NavigationProvider />
            </ThemeContextProvider>
        </SafeAreaView>
    );
}

export default App;

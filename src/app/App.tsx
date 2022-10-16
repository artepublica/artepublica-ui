import { ThemeContextProvider } from '@utils';

import { NavigationProvider } from './navigation';

function App(): JSX.Element {
    return (
        <ThemeContextProvider>
            <NavigationProvider />
        </ThemeContextProvider>
    );
}

export default App;

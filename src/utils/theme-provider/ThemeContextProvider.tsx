import { createContext } from 'react';

import { Theme } from './domain';
import { LightTheme } from './themes';

export type ThemeContextType = {
    theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

function ThemeContextProvider({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element {
    /*const colorScheme = useColorScheme();

    const [
        theme,
        setTheme,
    ] = useState<Theme>(colorScheme === 'dark' ? DarkTheme : LightTheme);

    useEffect(() => {
        if (colorScheme === 'dark' && !theme.dark) {
            setTheme(DarkTheme);
        } else if (colorScheme !== 'dark' && theme.dark) {
            setTheme(LightTheme);
        }
    }, [colorScheme]);*/

    return <ThemeContext.Provider value={{ theme: LightTheme }}>{children}</ThemeContext.Provider>;
}

type ThemeContextProviderMockProps = {
    children?: JSX.Element | JSX.Element[];
    value?: ThemeContextType;
};

export function ThemeContextProviderMock({ children, value }: ThemeContextProviderMockProps): JSX.Element {
    return <ThemeContext.Provider value={{ theme: value?.theme as Theme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;

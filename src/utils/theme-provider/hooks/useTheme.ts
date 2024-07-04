import { useContext } from 'react';

import { Theme } from '../domain';
import { ThemeContext, ThemeContextType } from '../ThemeContextProvider';

type HookType = {
  theme: Theme;
};

function useTheme(): HookType {
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  return { theme };
}

export default useTheme;

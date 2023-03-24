import { renderHook } from '@testing-library/react';

import useTheme from './useTheme';
import { ThemeContextProviderMock } from '../ThemeContextProvider';
import { LightTheme } from '../themes';

describe('useTheme', () => {
    it('should get theme from ThemeContextProvider', () => {
        jest.restoreAllMocks();

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <ThemeContextProviderMock value={{ theme: LightTheme }}>{children}</ThemeContextProviderMock>
        );

        const { result } = renderHook(useTheme, { wrapper });

        expect(result.current?.theme).toEqual(LightTheme);
    });
});

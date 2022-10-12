import { StackActions } from '@react-navigation/native';
import { act, render, fireEvent } from '@testing-library/react-native';

import NotFound from './NotFound';

const mockDispatch = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            dispatch: mockDispatch,
        }),
    };
});

describe('<NotFound />', () => {
    it('should render error text', () => {
        const { getByText } = render(<NotFound />);

        const text = getByText('404 not found');

        expect(text).toBeTruthy();
    });

    it('should render button', () => {
        const { getByText } = render(<NotFound />);

        const button = getByText('go to home');

        expect(button).toBeTruthy();
    });

    it('should navigate to Home', () => {
        const { getByText } = render(<NotFound />);

        const button = getByText('go to home');

        act(() => fireEvent.press(button));

        expect(mockDispatch).toBeCalledWith(StackActions.push('RootMenuNavigator', { screen: 'Home' }));
    });
});

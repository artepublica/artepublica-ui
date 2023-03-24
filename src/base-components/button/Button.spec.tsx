import { render, fireEvent } from '@testing-library/react-native';

import { buttonTheme } from '@utils';

import Button from './Button';

describe('<Button />', () => {
    it('should render title', () => {
        const title = 'test';

        const { getByText } = render(<Button>{title}</Button>);

        const button = getByText(title);

        expect(button).toBeTruthy();
    });

    it('should call onPress', () => {
        const onPress = jest.fn();
        const title = 'test';

        const { getByText } = render(<Button onPress={onPress}>{title}</Button>);

        const button = getByText(title);

        fireEvent.press(button);

        expect(onPress).toBeCalledTimes(1);
    });

    it('should use theme style', () => {
        const title = 'test';

        const { getByText } = render(<Button>{title}</Button>);

        const button = getByText(title);

        expect(button.parent?.parent).toHaveStyle({
            backgroundColor: buttonTheme.backgroundColor,
            borderColor: buttonTheme.borderColor,
            borderRadius: 8,
            borderWidth: 1,
            color: buttonTheme.textColor,
            fontFamily: buttonTheme.font.fontFamily,
            padding: 16,
        });
    });

    it('should change style when pressed', () => {
        const title = 'test';

        const { getByText } = render(<Button testOnly_pressed>{title}</Button>);

        const button = getByText(title);

        expect(button.parent?.parent).toHaveStyle({
            backgroundColor: buttonTheme.pressed.backgroundColor,
            borderColor: buttonTheme.pressed.borderColor,
            borderRadius: 8,
            borderWidth: 1,
            color: buttonTheme.pressed.textColor,
            fontFamily: buttonTheme.font.fontFamily,
            padding: 16,
        });
    });
});

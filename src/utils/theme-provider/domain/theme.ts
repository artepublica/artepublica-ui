import Fonts from './fonts';

type NavigationTheme = {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    active: string;
    inactive: string;
};

type ButtonTheme = {
    font: {
        fontFamily: string;
    };
    textColor: string;
    borderColor: string;
    backgroundColor: string;
    pressed: {
        textColor: string;
        borderColor: string;
        backgroundColor: string;
    };
};

type TextTheme = {
    font: {
        fontFamily: string;
    };
    textColor: string;
};

export type Theme = {
    dark: boolean;
    background: string;
    navigation: NavigationTheme;
    fonts: Fonts;
    button: ButtonTheme;
    text: TextTheme;
};

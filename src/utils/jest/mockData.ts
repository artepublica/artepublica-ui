import { Theme } from '../theme-provider';

export const buttonTheme = {
    font: {
        fontFamily: 'fontFamily',
        fontWeight: 'normal',
    },
    textColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    pressed: {
        textColor: 'black',
        borderColor: 'black',
        backgroundColor: 'black',
    },
};

export const textTheme = {
    font: {
        fontFamily: 'fontFamily',
        fontWeight: 'normal',
    },
    textColor: 'white',
};

export const theme = {
    dark: false,
    navigation: {},
    colors: {},
    fonts: { regular: {}, medium: {}, light: {}, thin: {} },
    button: buttonTheme,
    text: textTheme,
    header: {},
    bottomTab: {},
    tipologia: {},
    coresGrafico: [],
} as unknown as Theme;

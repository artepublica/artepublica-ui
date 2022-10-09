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

type HeaderTheme = {
    fontSize: number;
    lineHeight: number;
};

type BottomTabTheme = {
    fontSize: number;
    lineHeight: number;
};

export type TipologiaTheme = {
    busto: string;
    cabeça: string;
    escultura: string;
    estátua: string;
    'grupo escultórico': string;
    'lâmina escultórica': string;
    obelisco: string;
    relevo: string;
    desconhecida: string;
};

export type Theme = {
    dark: boolean;
    background: string;
    navigation: NavigationTheme;
    fonts: Fonts;
    button: ButtonTheme;
    text: TextTheme;
    header: HeaderTheme;
    bottomTab: BottomTabTheme;
    principal: string;
    secundaria: string;
    tipologia: TipologiaTheme;
    coresGrafico: string[];
};

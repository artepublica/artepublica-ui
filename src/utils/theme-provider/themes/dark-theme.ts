import { Platform } from 'react-native';

import { Theme } from '../domain';
import { magenta, lilas, azul, verde2, coresGraficoLight, amarelo, azul3, laranja, vermelho2 } from './cores';
import fonts from './fonts';

const DarkTheme: Theme = {
    dark: true,
    background: '#000000',
    navigation: {
        background: 'rgb(1, 1, 1)',
        border: 'rgb(39, 39, 41)',
        card: 'rgb(18, 18, 18)',
        notification: 'rgb(255, 69, 58)',
        primary: 'rgb(10, 132, 255)',
        text: '#FFFFFF',
        active: '#2251FF',
        inactive: '#FFFFFF',
    },
    fonts: Platform.select(fonts),
    button: {
        font: Platform.select(fonts).medium,
        textColor: '#000000',
        borderColor: '#000000',
        backgroundColor: '#B3B3B3',
        pressed: {
            textColor: '#000000',
            borderColor: '#000000',
            backgroundColor: '#F0F0F0',
        },
    },
    text: {
        font: Platform.select(fonts).medium,
        textColor: '#FFFFFF',
    },
    header: {
        fontSize: 24,
        lineHeight: 32,
    },
    bottomTab: {
        fontSize: 12,
        lineHeight: 12,
    },
    principal: '#FFFFFF',
    secundaria: '#B3B3B3',
    tipologia: {
        busto: magenta,
        cabeça: amarelo,
        escultura: azul,
        estátua: verde2,
        'grupo escultórico': laranja,
        'lâmina escultórica': azul3,
        obelisco: lilas,
        relevo: vermelho2,
    },
    coresGrafico: coresGraficoLight,
};

export default DarkTheme;

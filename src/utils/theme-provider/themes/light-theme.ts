import { Platform } from 'react-native';

import { Theme } from '../domain';
import { branco, principalLight, secundariaLight, magenta, rosa, lilas, vinho, azul, azul2, verde, verde2, coresGraficoLight } from './cores';
import fonts from './fonts';

const LightTheme: Theme = {
    dark: false,
    background: branco,
    navigation: {
        background: branco,
        border: secundariaLight,
        card: branco,
        notification: principalLight,
        primary: principalLight,
        text: principalLight,
        active: principalLight,
        inactive: secundariaLight,
    },
    fonts: Platform.select(fonts),
    button: {
        font: Platform.select(fonts).medium,
        textColor: principalLight,
        borderColor: principalLight,
        backgroundColor: secundariaLight,
        pressed: {
            textColor: secundariaLight,
            borderColor: secundariaLight,
            backgroundColor: principalLight,
        },
    },
    text: {
        font: Platform.select(fonts).medium,
        textColor: principalLight,
    },
    header: {
        fontSize: 24,
        lineHeight: 32,
    },
    bottomTab: {
        fontSize: 12,
        lineHeight: 12,
    },
    principal: principalLight,
    secundaria: secundariaLight,
    tipologia: {
        busto: magenta,
        cabeça: rosa,
        escultura: lilas,
        estátua: vinho,
        'grupo escultórica': azul,
        'lâmina escultórica': azul2,
        obelisco: verde,
        relevo: verde2,
    },
    coresGrafico: coresGraficoLight,
};

export default LightTheme;

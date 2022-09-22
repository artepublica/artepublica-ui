import { Platform } from 'react-native';

import { Theme } from '../domain';
import fonts from './fonts';

const LightTheme: Theme = {
    dark: false,
    background: '#FFFFFF',
    navigation: {
        background: '#FFFFFF',
        border: '#F2D7E3',
        card: '#FFFFFF',
        notification: '#CC1964',
        primary: '#CC1964',
        text: '#CC1964',
        active: '#CC1964',
        inactive: '#F2D7E3',
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
        textColor: '#000000',
    },
    header: {
        fontSize: 24,
        lineHeight: 32,
    },
    bottomTab: {
        fontSize: 12,
        lineHeight: 12,
    },
};

export default LightTheme;

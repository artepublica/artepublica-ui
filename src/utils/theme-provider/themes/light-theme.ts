import { Platform } from 'react-native';

import {
  amarelo,
  azul,
  azul3,
  branco,
  coresGraficoLight,
  laranja,
  lilas,
  magenta,
  principalLight,
  secundariaLight,
  verde2,
  vermelho2,
} from './cores';
import fonts from './fonts';
import { Theme } from '../domain';

const LightTheme: Theme = {
  dark: false,
  background: branco,
  /*navigation: {
        background: branco,
        border: secundariaLight,
        card: branco,
        notification: principalLight,
        primary: principalLight,
        text: principalLight,
        active: principalLight,
        inactive: secundariaLight,
    },*/
  navigation: {
    background: branco,
    border: principalLight,
    card: principalLight,
    notification: branco,
    primary: branco,
    text: branco,
    active: principalLight,
    inactive: branco,
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
  typology: {
    busto: magenta,
    cabeça: amarelo,
    escultura: azul,
    estátua: verde2,
    'grupo escultórico': laranja,
    'lâmina escultórica': azul3,
    obelisco: lilas,
    relevo: vermelho2,
    desconhecida: '#000',
  },
  coresGrafico: coresGraficoLight,
};

export default LightTheme;

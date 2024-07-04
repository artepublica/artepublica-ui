import * as pessoas from './pessoa';
import CuradorEspacoCultural from '../../domain/curador_espaco_cultural';

export const EverardoMiranda: CuradorEspacoCultural = {
  Pessoa: pessoas.EverardoMiranda,
  Mandatos: [
    {
      NomeEspacoCultural: 'Espaço Cultural Sérgio Porto',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1990',
      DataFim: '1993',
    },
  ],
};

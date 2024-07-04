import * as pessoas from './pessoa';
import Vereador from '../../domain/vereador';

export const CesarEpitacioMaia: Vereador = {
  Pessoa: pessoas.CesarEpitacioMaia,
  Mandatos: [
    {
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      Partido: undefined,
      DataInicio: '01/02/2013',
      DataFim: undefined,
    },
  ],
};

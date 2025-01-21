import * as persons from './persons';
import Vereador from '../../domain/vereador';

export const CesarEpitacioMaia: Vereador = {
  Person: persons.CesarEpitacioMaia,
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

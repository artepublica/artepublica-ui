import * as persons from './persons';
import DeputadoFederal from '../../domain/deputado_federal';

export const CesarEpitacioMaia: DeputadoFederal = {
  Person: persons.CesarEpitacioMaia,
  Mandatos: [
    {
      Pais: 'Brasil',
      Estado: 'Rio de Janeiro',
      Partido: undefined,
      DataInicio: '01/02/1987', //??TODO
      DataFim: '31/12/1992',
    },
  ],
};

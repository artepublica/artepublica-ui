import * as persons from './persons';
import Conselheiro from '../../domain/conselheiro';

export const LuizPauloFernandezConde: Conselheiro = {
  Person: persons.LuizPauloFernandezConde,
  Mandatos: [
    {
      NomeConselho: 'Conselho Municipal de Proteção ao Patrimônio Cultural',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1988',
      DataFim: undefined,
    },
  ],
};

import * as persons from './persons';
import CoordenadorFundacao from '../../domain/coordenador-fundacao';

export const FernandoCocchiarale: CoordenadorFundacao = {
  Person: persons.FernandoCocchiarale,
  Mandatos: [
    {
      NomeFundacao: 'Fundação Nacional de Arte',
      AbreviacaoFundacao: 'FUNARTE',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1991',
      DataFim: '1999',
    },
  ],
};

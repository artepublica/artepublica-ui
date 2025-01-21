import * as persons from './persons';
import PresidenteFundacao from '../../domain/presidente_fundacao';

export const HelenaMariaPortoSeveroDaCosta: PresidenteFundacao = {
  Person: persons.HelenaMariaPortoSeveroDaCosta,
  Mandatos: [
    {
      NomeFundacao: 'Fundação Biblioteca Nacional',
      AbreviacaoFundacao: undefined,
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '2016',
      DataFim: '2019',
    },
  ],
};

import * as persons from './persons';
import VicePresidenteFundacao from '../../domain/vicepresidente_fundacao';

export const HelenaMariaPortoSeveroDaCosta: VicePresidenteFundacao = {
  Person: persons.HelenaMariaPortoSeveroDaCosta,
  Mandatos: [
    {
      NomeFundacao:
        'Fundação Anita Mantuano de Artes do Estado do Rio de Janeiro',
      AbreviacaoFundacao: 'FUNARJ',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1980',
      DataFim: undefined,
    },
  ],
};

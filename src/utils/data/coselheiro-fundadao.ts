import * as persons from './persons';
import ConselheiroFundacao from '../../domain/conselheiro-fundacao';

export const LauroCavalcanti: ConselheiroFundacao = {
  Person: persons.LauroCavalcanti,
  Mandatos: [
    {
      NomeFundacao: 'Fundação Oscar Niemeyer',
      AbreviacaoFundacao: undefined,
      Cidade: undefined,
      Estado: undefined,
      Pais: 'Brasil',
      DataInicio: undefined,
      DataFim: undefined,
    },
  ],
};

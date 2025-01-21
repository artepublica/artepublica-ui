import * as persons from './persons';
import Secretario from '../../domain/secretario';

export const VaniaDrumondBonelli: Secretario = {
  ID: undefined,
  Person: persons.VaniaDrumondBonelli,
  Mandatos: [
    {
      NomeSecretaria: 'Secretaria Municipal de Cultura',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '23/03/1993',
      DataFim: '31/12/1996',
    },
  ],
};

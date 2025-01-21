import * as persons from './persons';
import ConselheiroCasa from '../../domain/conselheiro-casa';

export const LauroCavalcanti: ConselheiroCasa = {
  Person: persons.LauroCavalcanti,
  Mandatos: [
    {
      NomeCasa: 'Casa Lucio Costa',
      AbreviacaoCasa: undefined,
      Cidade: undefined,
      Estado: undefined,
      Pais: 'Brasil',
      DataInicio: undefined,
      DataFim: undefined,
    },
  ],
};

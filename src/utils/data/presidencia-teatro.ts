import * as persons from './persons';
import PresidenteTeatro from '../../domain/presidente_teatro';

export const HelenaMariaPortoSeveroDaCosta: PresidenteTeatro = {
  Person: persons.HelenaMariaPortoSeveroDaCosta,
  Mandatos: [
    {
      NomeTeatro: 'Teatro Municipal',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: undefined,
      DataFim: undefined,
    },
  ],
};

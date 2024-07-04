import * as pessoas from './pessoa';
import PresidenteInstituto from '../../domain/presidente_instituto';

export const LuizPauloFernandezConde: PresidenteInstituto = {
  Pessoa: pessoas.LuizPauloFernandezConde,
  Mandatos: [
    {
      NomeInstituto: 'Instituto do Arquitetos do Brasil - Rio de Janeiro',
      AbreviacaoInstituto: 'IAB/RJ',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1974',
      DataFim: '1979',
    },
  ],
};

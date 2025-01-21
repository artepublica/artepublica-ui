import * as persons from './persons';
import AssessorSecretaria from '../../domain/assessor_secretaria';

export const DanielaPedras: AssessorSecretaria = {
  Person: persons.DanielaPedras,
  Mandatos: [
    {
      NomeSecretaria: 'Secretaria Municipal de Cultura',
      NomeDivisao: undefined,
      NomeAssessoria: 'Assesoria de Projetos Especiais',
      Cargo: 'Assessor Chefe',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1994',
      DataFim: '1995',
    },
  ],
};

export const EverardoMiranda: AssessorSecretaria = {
  Person: persons.EverardoMiranda,
  Mandatos: [
    {
      NomeSecretaria: 'Secretaria Municipal de Cultura',
      NomeDivisao: undefined,
      NomeAssessoria: undefined,
      Cargo: 'Assessor',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1994',
      DataFim: undefined,
    },
  ],
};

export const PauloSergioDuarte: AssessorSecretaria = {
  Person: persons.PauloSergioDuarte,
  Mandatos: [
    {
      NomeSecretaria: 'Secretaria Municipal de Cultura',
      NomeDivisao: 'Divisao de Artes Visuais - RioArte',
      NomeAssessoria: undefined,
      Cargo: 'Assessor Chefe',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1994',
      DataFim: undefined,
    },
  ],
};

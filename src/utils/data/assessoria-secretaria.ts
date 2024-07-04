import * as pessoas from './pessoa';
import AssessorSecretaria from '../../domain/assessor_secretaria';

export const DanielaPedras: AssessorSecretaria = {
  Pessoa: pessoas.DanielaPedras,
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
  Pessoa: pessoas.EverardoMiranda,
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
  Pessoa: pessoas.PauloSergioDuarte,
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

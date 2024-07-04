import * as pessoas from './pessoa';
import DiretorDivisaoSecretaria from '../../domain/diretor_divisao_secretaria';

export const EverardoMiranda: DiretorDivisaoSecretaria = {
  Pessoa: pessoas.EverardoMiranda,
  Mandatos: [
    {
      NomeSecretaria: 'Secretaria Municipal de Cultura',
      NomeDivisao: 'Divisao de Artes Visuais - RioArte',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1983',
      DataFim: '1988',
    },
    {
      NomeSecretaria: 'Secretaria Municipal de Cultura',
      NomeDivisao: 'Divisao de Artes Visuais - RioArte',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1990',
      DataFim: '1993',
    },
  ],
};

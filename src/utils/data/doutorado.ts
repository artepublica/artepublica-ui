import * as pessoas from './pessoa';
import Graduacao from '../../domain/graduacao';

export const FernandoCocchiarale: Graduacao = {
  Pessoa: pessoas.FernandoCocchiarale,
  Faculdade: 'Universidade Federal do Rio de Janeiro',
  AbreviacaoFaculdade: 'UFRJ',
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Departamento: 'Escola de Comunicação',
  Curso: 'Tecnologias da Comunicação e Estética',
  DataInicio: undefined,
  DataFim: undefined,
  Finalizou: true,
};

export const LauroCavalcanti: Graduacao = {
  Pessoa: pessoas.LauroCavalcanti,
  Faculdade: 'Universidade Federal do Rio de Janeiro',
  AbreviacaoFaculdade: 'UFRJ',
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Departamento: undefined,
  Curso: 'Antropologia Social',
  DataInicio: '1981',
  DataFim: '1987',
  Finalizou: true,
};

export const PauloVenancioFilho: Graduacao = {
  Pessoa: pessoas.PauloVenancioFilho,
  Faculdade: 'Universidade Federal do Rio de Janeiro',
  AbreviacaoFaculdade: 'UFRJ',
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Departamento: undefined,
  Curso: 'Comunicação Social',
  DataInicio: '1993',
  DataFim: '1998',
  Finalizou: true,
};

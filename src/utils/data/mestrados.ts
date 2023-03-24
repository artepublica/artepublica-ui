import * as pessoas from './pessoa';
import Graduacao from '../../domain/graduacao';

export const HelenaMariaPortoSeveroDaCosta: Graduacao = {
    Pessoa: pessoas.HelenaMariaPortoSeveroDaCosta,
    Faculdade: undefined,
    AbreviacaoFaculdade: undefined,
    Cidade: undefined,
    Estado: undefined,
    Pais: undefined,
    Departamento: undefined,
    Curso: 'Ciências Sociais',
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
    DataInicio: '1987',
    DataFim: '1993',
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
    DataInicio: '1989',
    DataFim: '1992',
    Finalizou: true,
};

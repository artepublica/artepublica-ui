import * as pessoas from './pessoa';
import Colunista from '../../domain/colunista';

export const ReynaldoRoels_JornalDOBrasil: Colunista = {
    Pessoa: pessoas.ReynaldoRoels,
    Jornal: 'Jornal do Brasil',
    Coluna: undefined, // TODO 'Crítico de arte'
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    DataInicio: '1985',
    DataFim: '1990',
    Artigos: undefined,
};

export const RonaldoBrito_OGlobo: Colunista = {
    Pessoa: pessoas.RonaldoBrito,
    Jornal: 'O GLobo',
    Coluna: undefined, // TODO 'Crítico de arte'
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    DataInicio: undefined,
    DataFim: undefined,
    Artigos: undefined,
};

export const RonaldoBrito_FolhaDeSaoPaulo: Colunista = {
    Pessoa: pessoas.RonaldoBrito,
    Jornal: 'Folha de São Paulo',
    Coluna: undefined, // TODO 'Crítico de arte'
    Cidade: 'São Paulo',
    Estado: 'São Paulo',
    Pais: 'Brasil',
    DataInicio: undefined,
    DataFim: undefined,
    Artigos: undefined,
};

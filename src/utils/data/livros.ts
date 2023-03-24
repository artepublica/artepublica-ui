import * as pessoas from './pessoa';
import Livro from '../../domain/livro';

export const Neoconcretismo_RonaldoBrito: Livro = {
    Autor: pessoas.RonaldoBrito,
    Titulo: 'Neoconcretismo: vértice e ruptura do projeto construtivo brasileiro',
    Editora: 'Funarte',
    Cidade: 'Rio de Janeiro',
    Estado: 'Rio de Janeiro',
    Pais: 'Brasil',
    Data: '1985',
    Citados: [
        pessoas.FerreiraGullar,
        pessoas.AmilcarDeCastro,
        pessoas.FranzWeissmann,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        pessoas.ReynaldoJardim,
        pessoas.TheonSpanudis,
    ],
};

export const WaltercioCaldas_PauloVenancioFilho: Livro = {
    Autor: pessoas.PauloVenancioFilho,
    Titulo: 'Waltércio Caldas: manual da ciência popular',
    Editora: undefined,
    Cidade: undefined,
    Estado: undefined,
    Pais: undefined,
    Data: '1982',
    Citados: [
        pessoas.WaltercioCaldas,
    ],
};

import * as persons from './persons';
import Livro from '../../domain/livro';

export const Neoconcretismo_RonaldoBrito: Livro = {
  Autor: persons.RonaldoBrito,
  Titulo: 'Neoconcretismo: vértice e ruptura do projeto construtivo brasileiro',
  Editora: 'Funarte',
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Data: '1985',
  Citados: [
    persons.FerreiraGullar,
    persons.AmilcarDeCastro,
    persons.FranzWeissmann,
    persons.LygiaClark,
    persons.LygiaPape,
    persons.ReynaldoJardim,
    persons.TheonSpanudis,
  ],
};

export const WaltercioCaldas_PauloVenancioFilho: Livro = {
  Autor: persons.PauloVenancioFilho,
  Titulo: 'Waltércio Caldas: manual da ciência popular',
  Editora: undefined,
  Cidade: undefined,
  Estado: undefined,
  Pais: undefined,
  Data: '1982',
  Citados: [persons.WaltercioCaldas],
};

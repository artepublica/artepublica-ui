import * as persons from './persons';
import Manifesto from '../../domain/manifesto';

export const ManisfestoNeoconcreto1959: Manifesto = {
  Nome: 'Manifesto Neoconcreto',
  Publicacao: 'Suplemento dominical do Jornal do Brasil',
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Local: undefined,
  Data: '1959',
  Escritores: [persons.FerreiraGullar],
  Assinantes: [
    persons.AmilcarDeCastro,
    persons.FranzWeissmann,
    persons.LygiaClark,
    persons.LygiaPape,
    persons.ReynaldoJardim,
    persons.TheonSpanudis,
  ],
};

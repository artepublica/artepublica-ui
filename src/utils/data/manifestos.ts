import * as pessoas from './pessoa';
import Manifesto from '../../domain/manifesto';

export const ManisfestoNeoconcreto1959: Manifesto = {
  Nome: 'Manifesto Neoconcreto',
  Publicacao: 'Suplemento dominical do Jornal do Brasil',
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Local: undefined,
  Data: '1959',
  Escritores: [pessoas.FerreiraGullar],
  Assinantes: [
    pessoas.AmilcarDeCastro,
    pessoas.FranzWeissmann,
    pessoas.LygiaClark,
    pessoas.LygiaPape,
    pessoas.ReynaldoJardim,
    pessoas.TheonSpanudis,
  ],
};

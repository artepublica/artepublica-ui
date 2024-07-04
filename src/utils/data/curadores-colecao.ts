import * as pessoas from './pessoa';
import CuradorColecao from '../../domain/curador_colecao';

export const ReynaldoRoels: CuradorColecao = {
  Pessoa: pessoas.ReynaldoRoels,
  Mandatos: [
    {
      NomeColecao: 'Coleção Gilberto Chateaubriand',
      Cidade: undefined,
      Estado: undefined,
      Pais: 'Brasil',
      DataInicio: '1997',
      DataFim: '2000',
    },
  ],
};

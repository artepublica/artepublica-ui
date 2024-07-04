import * as pessoas from './pessoa';
import Secretario from '../../domain/secretario';

export const VaniaDrumondBonelli: Secretario = {
  ID: undefined,
  Pessoa: pessoas.VaniaDrumondBonelli,
  Mandatos: [
    {
      NomeSecretaria: 'Secretaria Municipal de Cultura',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '23/03/1993',
      DataFim: '31/12/1996',
    },
  ],
};

import * as persons from './persons';
import Comissao from '../../domain/comissao';

export const ComissaoDaPracaXV: Comissao = {
  Nome: 'Comissao da Praça XV',
  Descricao: undefined,
  Cidade: undefined,
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  DataInicio: undefined,
  DataFim: undefined,
  Coordenadores: [persons.HelenaMariaPortoSeveroDaCosta],
  Participantes: undefined,
  IntituicsoesEnvolvidas: [
    'Centro Cultural Banco do Brasil',
    'Casa França-Brasil',
    'Paço Imperial',
    'Museu Histório Nacional',
    'Centro Cultural Candido Mendes',
    'Museu Naval',
    'Museu da Imagem e do Som',
    'Museu de Arte Moderna do Rio de Janeiro',
  ],
};

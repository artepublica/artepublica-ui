import * as obras from './obra_artepublica';
import * as persons from './persons';
import PoliticaPublica from '../../domain/politicapublica';

export const EsculturasUrbanas: PoliticaPublica = {
  Titulo: 'Esculturas Urbanas',
  Descricao: undefined,
  Orcamento: undefined,
  ProjetoInicio: '1994',
  ProjetoFim: '1995',
  ImplementacaoInicio: '1996',
  ImplementacaoFim: '1997',
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Tipo: 'Municipal',
  Secretaria: 'Secretaria Municipal de Cultura',
  Coordenadores: [persons.ReynaldoRoels],
  Idealizadores: [
    persons.HelenaMariaPortoSeveroDaCosta,
    persons.EverardoMiranda,
  ],
  ComissaoDeSelecao: [
    persons.RonaldoBrito,
    persons.PauloVenancioFilho,
    persons.LauroCavalcanti,
    persons.FernandoCocchiarale,
  ],
  Obras: [
    obras.OPassante_JoseResende,
    obras.SemTitulo_AmilcarDeCastro,
    obras.RetanguloVazado_FranzWeissmann,
    obras.SemTitulo_IvensMachado,
    obras.EsculturaParaORio_WaltercioCaldas,
  ],
};

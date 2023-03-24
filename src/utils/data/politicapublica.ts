import * as obras from './obra_artepublica';
import * as pessoas from './pessoa';
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
    Coordenadores: [
        pessoas.ReynaldoRoels,
    ],
    Idealizadores: [
        pessoas.HelenaMariaPortoSeveroDaCosta,
        pessoas.EverardoMiranda,
    ],
    ComissaoDeSelecao: [
        pessoas.RonaldoBrito,
        pessoas.PauloVenancioFilho,
        pessoas.LauroCavalcanti,
        pessoas.FernandoCocchiarale,
    ],
    Obras: [
        obras.OPassante_JoseResende,
        obras.SemTitulo_AmilcarDeCastro,
        obras.RetanguloVazado_FranzWeissmann,
        obras.SemTitulo_IvensMachado,
        obras.EsculturaParaORio_WaltercioCaldas,
    ],
};

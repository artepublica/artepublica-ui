import Obra from './obra';
import Person from './person';

type PoliticaPublica = {
  ID?: number;
  Titulo?: string;
  Descricao?: string;
  Orcamento?: string;
  ProjetoInicio?: string;
  ProjetoFim?: string;
  ImplementacaoInicio?: string;
  ImplementacaoFim?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Tipo?: string;
  Secretaria?: string;
  Idealizadores?: Person[];
  Obras?: Obra[];
  Coordenadores?: Person[];
  ComissaoDeSelecao?: Person[];
};

export default PoliticaPublica;

import Obra from './obra';
import Pessoa from './pessoa';

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
  Idealizadores?: Pessoa[];
  Obras?: Obra[];
  Coordenadores?: Pessoa[];
  ComissaoDeSelecao?: Pessoa[];
};

export default PoliticaPublica;

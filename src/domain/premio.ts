import Exposicao from './exposicao';
import Obra from './obra';
import Pessoa from './pessoa';

type Premio = {
  ID?: number;
  Nome?: string;
  Evento?: Exposicao;
  Instituicao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Local?: string;
  Data?: string;
  Pessoas?: Pessoa[];
  Descricao?: string;
  Obra?: Obra;
};

export default Premio;

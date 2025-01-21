import Exposicao from './exposicao';
import Obra from './obra';
import Person from './person';

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
  Persons?: Person[];
  Descricao?: string;
  Obra?: Obra;
};

export default Premio;

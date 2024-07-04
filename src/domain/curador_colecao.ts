import MandatoCuradorColecao from './mandato_curador_colecao';
import Pessoa from './pessoa';

type CuradorColecao = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoCuradorColecao[];
};

export default CuradorColecao;

import MandatoCuradorMuseu from './mandato_curador_museu';
import Pessoa from './pessoa';

type CuradorMuseu = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoCuradorMuseu[];
};

export default CuradorMuseu;

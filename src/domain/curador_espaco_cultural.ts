import MandatoCuradorEspacoCultural from './mandato_curador_espaco_cultural';
import Pessoa from './pessoa';

type CuradorEspacoCultural = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoCuradorEspacoCultural[];
};

export default CuradorEspacoCultural;

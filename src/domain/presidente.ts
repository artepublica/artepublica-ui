import MandatoPresidente from './mandato_presidente';
import Pessoa from './pessoa';

type Presidente = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoPresidente[];
};

export default Presidente;

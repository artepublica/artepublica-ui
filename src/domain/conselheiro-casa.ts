import MandatoCasa from './mandato_casa';
import Pessoa from './pessoa';

type ConselheiroCasa = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoCasa[];
};

export default ConselheiroCasa;

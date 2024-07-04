import MandatoPrefeito from './mandato_prefeito';
import Pessoa from './pessoa';

type Prefeito = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoPrefeito[];
};

export default Prefeito;

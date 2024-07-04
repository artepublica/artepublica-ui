import MandatoConselheiro from './mandato_conselheiro';
import Pessoa from './pessoa';

type Conselheiro = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoConselheiro[];
};

export default Conselheiro;

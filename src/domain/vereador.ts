import MandatoVereador from './mandato_vereador';
import Pessoa from './pessoa';

type Vereador = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoVereador[];
};

export default Vereador;

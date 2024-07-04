import MandatoPresidenteTeatro from './mandato_presidente_teatro';
import Pessoa from './pessoa';

type PresidenteTeatro = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoPresidenteTeatro[];
};

export default PresidenteTeatro;

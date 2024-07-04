import MandatoPresidenteInstituto from './mandato_presidente_intituto';
import Pessoa from './pessoa';

type PresidenteInstituto = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoPresidenteInstituto[];
};

export default PresidenteInstituto;

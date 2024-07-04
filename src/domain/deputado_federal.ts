import MandatoDeputadoFederal from './mandato_deputado_federal';
import Pessoa from './pessoa';

type DeputadoFederal = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoDeputadoFederal[];
};

export default DeputadoFederal;

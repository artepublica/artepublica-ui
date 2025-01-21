import MandatoDeputadoFederal from './mandato_deputado_federal';
import Person from './person';

type DeputadoFederal = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoDeputadoFederal[];
};

export default DeputadoFederal;

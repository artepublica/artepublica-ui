import MandatoPresidenteInstituto from './mandato_presidente_intituto';
import Person from './person';

type PresidenteInstituto = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoPresidenteInstituto[];
};

export default PresidenteInstituto;

import MandatoInstituto from './mandato_instituto';
import Person from './person';

type DiretorInstituto = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoInstituto[];
};

export default DiretorInstituto;

import MandatoDiretorInstituto from './mandato_diretor_instituto';
import Person from './person';

type DiretorInstituto = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoDiretorInstituto[];
};

export default DiretorInstituto;

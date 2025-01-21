import MandatoDiretoriaFaculdade from './mandato_diretoria_faculdade';
import Person from './person';

type DiretorFaculdade = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoDiretoriaFaculdade[];
};

export default DiretorFaculdade;

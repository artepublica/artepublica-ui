import MandatoDiretorCurso from './mandato_diretor_curso';
import Person from './person';

type DiretorCurso = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoDiretorCurso[];
};

export default DiretorCurso;

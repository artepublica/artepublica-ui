import MandatoDiretorCurso from './mandato_diretor_curso';
import Pessoa from './pessoa';

type DiretorCurso = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoDiretorCurso[];
};

export default DiretorCurso;

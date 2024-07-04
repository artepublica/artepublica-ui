import MandatoDiretoriaFaculdade from './mandato_diretoria_faculdade';
import Pessoa from './pessoa';

type DiretorFaculdade = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoDiretoriaFaculdade[];
};

export default DiretorFaculdade;

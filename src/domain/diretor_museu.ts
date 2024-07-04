import MandatoDiretorMuseu from './mandato_diretor_museu';
import Pessoa from './pessoa';

type DiretorMuseu = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoDiretorMuseu[];
};

export default DiretorMuseu;

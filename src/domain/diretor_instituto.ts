import MandatoDiretorInstituto from './mandato_diretor_instituto';
import Pessoa from './pessoa';

type DiretorInstituto = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoDiretorInstituto[];
};

export default DiretorInstituto;

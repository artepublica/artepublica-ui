import MandatoInstituto from './mandato_instituto';
import Pessoa from './pessoa';

type DiretorInstituto = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoInstituto[];
};

export default DiretorInstituto;

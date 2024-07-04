import MandatoSecretario from './mandato_secretario';
import Pessoa from './pessoa';
import Profissao from './profissao';

type Secretario = {
  ID?: number;
  Pessoa?: Pessoa;
  IDSecretaria?: string;
  Profissao?: Profissao;
  Mandatos?: MandatoSecretario[];
};

export default Secretario;

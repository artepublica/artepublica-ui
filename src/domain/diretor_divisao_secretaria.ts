import MandatoDiretorDivisaoSecretaria from './mandato_diretor_divisao_secretaria';
import Pessoa from './pessoa';

type DiretorSecretaria = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoDiretorDivisaoSecretaria[];
};

export default DiretorSecretaria;

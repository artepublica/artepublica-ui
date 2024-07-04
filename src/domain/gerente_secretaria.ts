import MandatoGerenteSecretaria from './mandato_gerente_secretaria';
import Pessoa from './pessoa';

type GerenteSecretaria = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoGerenteSecretaria[];
};

export default GerenteSecretaria;

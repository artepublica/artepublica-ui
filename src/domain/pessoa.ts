import Especialidade from './especialidade';
import Fato from './fato';
import Profissao from './profissao';

type Pessoa = {
  ID?: number;
  Nome?: string;
  Nascimento?: string;
  CidadePaisNascimento?: string;
  Morte?: string;
  CidadePaisMorte?: string;
  Descriçao?: string;
  Profissoes?: Profissao[];
  Especialidades?: Especialidade[];
  Fatos?: Fato[];
};

export default Pessoa;

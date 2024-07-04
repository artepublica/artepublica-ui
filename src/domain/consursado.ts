import Pessoa from './pessoa';

type Concursado = {
  ID?: number;
  Pessoa?: Pessoa;
  Cargo?: string;
  Orgao?: string;
  AbreviacaoOrgao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
};

export default Concursado;

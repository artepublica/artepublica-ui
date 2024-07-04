import Pessoa from './pessoa';

type Curso = {
  ID?: number;
  Pessoa?: Pessoa;
  Instituicao?: string;
  AbreviacaoInstituicao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Curso?: string;
  DataInicio?: string;
  DataFim?: string;
  Finalizou?: boolean;
};

export default Curso;

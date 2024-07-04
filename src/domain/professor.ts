import Pessoa from './pessoa';

type Professor = {
  ID?: number;
  Pessoa?: Pessoa;
  Instituicao?: string;
  AbreviacaoInstituicao?: string;
  Departamento?: string;
  Curso?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
};

export default Professor;

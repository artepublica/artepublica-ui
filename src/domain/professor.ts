import Person from './person';

type Professor = {
  ID?: number;
  Person?: Person;
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

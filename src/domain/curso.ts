import Person from './person';

type Curso = {
  ID?: number;
  Person?: Person;
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

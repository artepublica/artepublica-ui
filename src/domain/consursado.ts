import Person from './person';

type Concursado = {
  ID?: number;
  Person?: Person;
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

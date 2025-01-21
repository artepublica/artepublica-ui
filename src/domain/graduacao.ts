import Person from './person';

type Graduacao = {
  ID?: number;
  Person?: Person;
  Faculdade?: string;
  AbreviacaoFaculdade?: string;
  Departamento?: string;
  Curso?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Finalizou?: boolean;
};

export default Graduacao;

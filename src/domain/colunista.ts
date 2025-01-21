import Person from './person';

type Colunista = {
  ID?: number;
  Person?: Person;
  Jornal?: string;
  Coluna?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Artigos?: {
    Titulo?: string;
    Data?: string;
  }[];
};

export default Colunista;

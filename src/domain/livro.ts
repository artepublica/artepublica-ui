import Person from './person';

type Curso = {
  ID?: number;
  Autor?: Person;
  Titulo?: string;
  Editora?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Data?: string;
  Citados?: Person[];
};

export default Curso;

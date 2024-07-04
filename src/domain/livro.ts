import Pessoa from './pessoa';

type Curso = {
  ID?: number;
  Autor?: Pessoa;
  Titulo?: string;
  Editora?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Data?: string;
  Citados?: Pessoa[];
};

export default Curso;

import Pessoa from './pessoa';

type ArtigoJornal = {
  ID?: number;
  Jornal?: string;
  Titulo?: string;
  Autores?: Pessoa[];
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Data?: string;
};

export default ArtigoJornal;

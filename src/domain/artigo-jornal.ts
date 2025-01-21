import Person from './person';

type ArtigoJornal = {
  ID?: number;
  Jornal?: string;
  Titulo?: string;
  Autores?: Person[];
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Data?: string;
};

export default ArtigoJornal;

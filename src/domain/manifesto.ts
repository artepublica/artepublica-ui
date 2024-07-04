import Pessoa from './pessoa';

type Manifesto = {
  ID?: number;
  Nome?: string;
  Publicacao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Local?: string;
  Data?: string;
  Escritores?: Pessoa[];
  Assinantes?: Pessoa[];
};

export default Manifesto;

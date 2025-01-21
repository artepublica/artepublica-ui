import Person from './person';

type Manifesto = {
  ID?: number;
  Nome?: string;
  Publicacao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Local?: string;
  Data?: string;
  Escritores?: Person[];
  Assinantes?: Person[];
};

export default Manifesto;

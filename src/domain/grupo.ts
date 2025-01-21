import Person from './person';

type Grupo = {
  ID?: number;
  Nome?: string;
  Descricao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Participantes?: Person[];
};

export default Grupo;

import Person from './person';

type JornalIndependente = {
  ID?: number;
  Nome?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Participantes?: Person[];
  DataInicio?: string;
  DataFim?: string;
};

export default JornalIndependente;

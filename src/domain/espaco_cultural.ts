import Person from './person';

type EspacoCultural = {
  ID?: number;
  Instituicao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Fundacao?: string;
  Fundadores?: Person[];
};

export default EspacoCultural;

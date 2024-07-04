import Pessoa from './pessoa';

type EspacoCultural = {
  ID?: number;
  Instituicao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Fundacao?: string;
  Fundadores?: Pessoa[];
};

export default EspacoCultural;

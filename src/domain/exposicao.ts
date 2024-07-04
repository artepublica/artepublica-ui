import Pessoa from './pessoa';

type Exposicao = {
  ID?: number;
  Nome?: string;
  Instituicao?: string;
  AbreviacaoInstituicao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Local?: string;
  DataInicio?: string;
  DataFim?: string;
  Curadores?: Pessoa[];
  Expositores?: Pessoa[];
  Patrocinios?: string[];
  CatalogoEscritoPor?: Pessoa[];
  Juri?: Pessoa[];
  JuriDeSelecao?: Pessoa[];
  Montadores?: Pessoa[];
  Organizadores?: Pessoa[];
  ComissaoDePremiacao?: Pessoa[];
  ComissaoDeSelecao?: Pessoa[];
  ArtistasConvidados?: Pessoa[];
};

export default Exposicao;

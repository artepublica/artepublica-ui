import Person from './person';

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
  Curadores?: Person[];
  Expositores?: Person[];
  Patrocinios?: string[];
  CatalogoEscritoPor?: Person[];
  Juri?: Person[];
  JuriDeSelecao?: Person[];
  Montadores?: Person[];
  Organizadores?: Person[];
  ComissaoDePremiacao?: Person[];
  ComissaoDeSelecao?: Person[];
  ArtistasConvidados?: Person[];
};

export default Exposicao;

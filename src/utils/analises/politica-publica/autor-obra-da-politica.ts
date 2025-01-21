import { PoliticaPublica } from '@domain';

function autorObraDaPolitica(
  politicaPublica: PoliticaPublica,
  person: string,
): boolean {
  return (
    politicaPublica.Obras?.find(
      (obra) =>
        obra.Autores?.find((autor) => autor.Person?.Name === person) != null,
    ) != null
  );
}

export default autorObraDaPolitica;

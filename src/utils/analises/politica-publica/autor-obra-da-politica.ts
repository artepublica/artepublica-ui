import { PoliticaPublica } from '@domain';

function autorObraDaPolitica(
  politicaPublica: PoliticaPublica,
  pessoa: string,
): boolean {
  return (
    politicaPublica.Obras?.find(
      (obra) =>
        obra.Autores?.find((autor) => autor.Pessoa?.Nome === pessoa) != null,
    ) != null
  );
}

export default autorObraDaPolitica;

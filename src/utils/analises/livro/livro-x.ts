import { Livro, PoliticaPublica, TipoCapital, TrocaCapital } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

import { default as citadosLivro } from './citados';
import trocaCapital from '../capitais/troca-capital';
import agenteDaPolitica from '../politica-publica/agente-da-politica';

function livroX(
  livro: Livro,
  politicaPublica: PoliticaPublica,
): TrocaCapital[] {
  const autores = [livro.Autor?.Name].filter(onlyUniqueNotUndefinedString);
  const citados = citadosLivro(livro);

  const autorXautor = trocaCapital(
    autores.filter((autor) => agenteDaPolitica(politicaPublica, autor)),
    citados,
    'autor-citado',
    [TipoCapital.Social, TipoCapital.Cultural],
  );

  return autorXautor;
}

export default livroX;

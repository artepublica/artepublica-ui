import { ArtigoJornal, PoliticaPublica, TrocaCapital } from '@domain';

import agenteDaPolitica from './agente-da-politica';
import autorObraDaPolitica from './autor-obra-da-politica';
import artigoJornalX from '../artigo-jornal/artigo-jornal-x';
import { antes } from '../dataUtils';

function fazParteDaPolitica(
  politicaPublica: PoliticaPublica,
  pessoa: string,
): boolean {
  return (
    agenteDaPolitica(politicaPublica, pessoa) ||
    autorObraDaPolitica(politicaPublica, pessoa)
  );
}

function politicaPublicaXartigoJornal(
  politicaPublica: PoliticaPublica,
  artigoJornal: ArtigoJornal,
): TrocaCapital[] {
  if (
    politicaPublica.ProjetoInicio &&
    artigoJornal.Data &&
    politicaPublica.ProjetoInicio !== '' &&
    artigoJornal.Data !== '' &&
    antes(artigoJornal.Data, politicaPublica.ProjetoInicio)
  ) {
    return artigoJornalX(artigoJornal, politicaPublica).filter(
      (troca) =>
        fazParteDaPolitica(politicaPublica, troca.pessoa1) ||
        fazParteDaPolitica(politicaPublica, troca.pessoa2),
    );
  }
  return [];
}

export default politicaPublicaXartigoJornal;

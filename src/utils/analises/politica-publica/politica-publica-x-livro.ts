import { Livro, PoliticaPublica, TrocaCapital } from '@domain';

import { antes } from '../dataUtils';
import livroX from '../livro/livro-x';
import agenteDaPolitica from './agente-da-politica';
import autorObraDaPolitica from './autor-obra-da-politica';

function fazParteDaPolitica(politicaPublica: PoliticaPublica, pessoa: string): boolean {
    return agenteDaPolitica(politicaPublica, pessoa) || autorObraDaPolitica(politicaPublica, pessoa);
}

function politicaPublicaXlivro(politicaPublica: PoliticaPublica, livro: Livro): TrocaCapital[] {
    if (
        politicaPublica.ProjetoInicio &&
        livro.Data &&
        politicaPublica.ProjetoInicio !== '' &&
        livro.Data !== '' &&
        antes(livro.Data, politicaPublica.ProjetoInicio)
    ) {
        return livroX(livro).filter((troca) => fazParteDaPolitica(politicaPublica, troca.pessoa1) || fazParteDaPolitica(politicaPublica, troca.pessoa2));
    }
    return [];
}

export default politicaPublicaXlivro;

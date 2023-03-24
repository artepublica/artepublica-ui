import { ArtigoJornal, PoliticaPublica, TipoCapital, TrocaCapital } from '@domain';

import { default as autoresArtigoJornal } from './autores';
import trocaCapital from '../capitais/troca-capital';
import agenteDaPolitica from '../politica-publica/agente-da-politica';

function artigoJornalX(artigoJornal: ArtigoJornal, politicaPublica: PoliticaPublica): TrocaCapital[] {
    const autores = autoresArtigoJornal(artigoJornal);

    const autorXautor = trocaCapital(
        autores.filter((autor) => agenteDaPolitica(politicaPublica, autor)),
        autores,
        'autor-autor',
        [
            TipoCapital.Social,
            TipoCapital.Cultural,
        ],
    );

    return autorXautor;
}

export default artigoJornalX;

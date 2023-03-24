import { PoliticaPublica, Exposicao, TrocaCapital } from '@domain';

import agenteDaPolitica from './agente-da-politica';
import { antes } from '../dataUtils';
import exposicaoX from '../exposicao/exposicao-x';

function politicaPublicaXexposicao(politicaPublica: PoliticaPublica, exposicao: Exposicao): TrocaCapital[] {
    if (
        politicaPublica.ProjetoInicio &&
        exposicao.DataInicio &&
        politicaPublica.ProjetoInicio !== '' &&
        exposicao.DataInicio !== '' &&
        antes(exposicao.DataInicio, politicaPublica.ProjetoInicio)
    ) {
        return exposicaoX(exposicao).filter((troca) => agenteDaPolitica(politicaPublica, troca.pessoa1));
    }
    return [];
}

export default politicaPublicaXexposicao;

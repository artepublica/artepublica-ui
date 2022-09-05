import { Pessoa } from '@domain';
import * as coordenadoresFundacao from '@utils/data/coordenador-fundacao';
import CoordenadorFundacao from 'src/domain/coordenador-fundacao';
import Exposicao from 'src/domain/exposicao';

import { entre } from './dataUtils';

function coordenadorFundacao_Exposicao(exposicao: Exposicao): (Pessoa | undefined)[] {
    const typed_coordenadoresFundacao: Record<string, CoordenadorFundacao> = coordenadoresFundacao;

    const coordenadores: (Pessoa | undefined)[] = [];

    Object.keys(typed_coordenadoresFundacao).forEach((key) => {
        const coordenadorFundacao = typed_coordenadoresFundacao[key];

        coordenadorFundacao.Mandatos?.forEach((mandato) => {
            if (
                mandato.DataInicio &&
                mandato.DataFim &&
                (entre(exposicao.DataInicio, mandato.DataInicio, mandato.DataFim) || entre(exposicao.DataFim, mandato.DataInicio, mandato.DataFim))
            ) {
                coordenadores.push(coordenadorFundacao.Pessoa);
            }
        });
    });

    return coordenadores;
}

export default coordenadorFundacao_Exposicao;

import { Pessoa } from '@domain';
import * as curadoresColecao from '@utils/data/curadores-colecao';
import CuradorColecao from 'src/domain/curador_colecao';
import Exposicao from 'src/domain/exposicao';

import { entre } from './dataUtils';

function curadorColecao_Exposicao(exposicao: Exposicao): (Pessoa | undefined)[] {
    const typed_curadoresColecao: Record<string, CuradorColecao> = curadoresColecao;

    const curadores: (Pessoa | undefined)[] = [];

    Object.keys(typed_curadoresColecao).forEach((key) => {
        const curadorColecao = typed_curadoresColecao[key];

        curadorColecao.Mandatos?.forEach((mandato) => {
            if (
                mandato.DataInicio &&
                mandato.DataFim &&
                (entre(exposicao.DataInicio, mandato.DataInicio, mandato.DataFim) || entre(exposicao.DataFim, mandato.DataInicio, mandato.DataFim))
            ) {
                curadores.push(curadorColecao.Pessoa);
            }
        });
    });

    return curadores;
}

export default curadorColecao_Exposicao;

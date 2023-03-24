import * as pessoas from './pessoa';
import DiretorCurso from '../../domain/diretor_curso';

export const ReynaldoRoels: DiretorCurso = {
    // TODO: n seria reitor??
    Pessoa: pessoas.ReynaldoRoels,
    Mandatos: [
        {
            Instituicao: 'Escola de Artes Visuais do Parque Laje',
            AbreviacaoInstituicao: undefined,
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            Curso: undefined,
            DataInicio: '2002',
            DataFim: '2006',
        },
    ],
};

export const AmilcarDeCastro: DiretorCurso = {
    // TODO: n seria reitor??
    Pessoa: pessoas.AmilcarDeCastro,
    Mandatos: [
        {
            Instituicao: 'Escola Guinard',
            AbreviacaoInstituicao: undefined,
            Cidade: 'Belo Horizonte',
            Estado: 'Minas Gerais',
            Pais: 'Brasil',
            Curso: undefined,
            DataInicio: undefined,
            DataFim: undefined,
        },
    ],
};

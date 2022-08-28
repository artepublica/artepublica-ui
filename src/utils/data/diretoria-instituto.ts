import DiretorInstituto from '../../domain/diretor_instituto';
import * as pessoas from './pessoa';

export const HelenaMariaPortoSeverodaCosta: DiretorInstituto = {
    Pessoa: pessoas.HelenaMariaPortoSeverodaCosta,
    Mandatos: [
        {
            NomeInstituto: 'Instituto Brasileiro de Patrimônio Cultural',
            AbreviacaoInstitudo: 'IBPC',
            Cidade: undefined,
            Estado: undefined,
            Pais: undefined,
            DataInicio: undefined,
            DataFim: undefined,
        },
    ],
};

import * as pessoas from './pessoa';
import ConselheiroCasa from '../../domain/conselheiro-casa';

export const LauroCavalcanti: ConselheiroCasa = {
    Pessoa: pessoas.LauroCavalcanti,
    Mandatos: [
        {
            NomeCasa: 'Casa Lucio Costa',
            AbreviacaoCasa: undefined,
            Cidade: undefined,
            Estado: undefined,
            Pais: 'Brasil',
            DataInicio: undefined,
            DataFim: undefined,
        },
    ],
};

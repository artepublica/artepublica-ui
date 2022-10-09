import { Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesEnderecosRecorte: string[] = obrasRecorte
    .map((obra) => obra.Endereco ?? 'Desconhecida')
    .reduce<string[]>((enderecos, endereco) => {
        if (!enderecos.includes(endereco)) {
            enderecos.push(endereco);
        }
        return enderecos;
    }, []);

const enderecosRecorte: { nome: string; obras: Obra[] }[] = nomesEnderecosRecorte.reduce<{ nome: string; obras: Obra[] }[]>(function (total, endereco) {
    total.push({
        nome: endereco,
        obras: obrasRecorte.filter((obra) => obra.Endereco === endereco || (obra.Endereco == null && endereco === 'Desconhecida')),
    });
    return total;
}, []);

export default enderecosRecorte;

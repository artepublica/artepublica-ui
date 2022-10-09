import { Obra } from '@domain';

import obras from './obras';

const nomesEnderecos: string[] = obras
    .map((obra) => obra.Endereco ?? 'Desconhecida')
    .reduce<string[]>((enderecos, endereco) => {
        if (!enderecos.includes(endereco)) {
            enderecos.push(endereco);
        }
        return enderecos;
    }, []);

const enderecos: { nome: string; obras: Obra[] }[] = nomesEnderecos.reduce<{ nome: string; obras: Obra[] }[]>(function (total, endereco) {
    total.push({
        nome: endereco,
        obras: obras.filter((obra) => obra.Endereco === endereco || (obra.Endereco == null && endereco === 'Desconhecida')),
    });
    return total;
}, []);

export default enderecos;

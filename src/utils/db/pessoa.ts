import { GraphQLClient, gql } from 'graphql-request';

import { Obra } from '@domain';

export async function adicionarPessoa(obra: Obra): Promise<string[]> {
    const ids: string[] = [];
    obra.Autores?.forEach(async (autor) => {
        if (autor.Pessoa?.Nome) {
            const getQuery = gql`
                {
                    pessoa(where: { nome: { _eq: "${autor.Pessoa?.Nome}" } }) {
                        id
                    }
                }
            `;
            const client = new GraphQLClient('https://artepublica-dev.hasura.app/v1/graphql', {
                headers: {
                    'content-type': 'application/json',
                    'x-hasura-admin-secret': 'HF0Wbv0guCE2zzTAx3rnkVwO5h9SYBAABiu83M0Zy3kszNDOUofWaCNxh45Mhq2w',
                },
            });

            const data = await client.request<{ pessoa: { id: string }[] }>(getQuery);

            if (data.pessoa && data.pessoa.length > 0) {
                ids.push(data.pessoa[0].id);
            } else {
                /*const insertQuery = gql`
                    {
                        insert_pessoa_one(object: { nome: "${autor.Pessoa?.Nome}", nascimento: "${}", morte: "${}", cidade_nascimento: "${}", cidade_morte: "${}", descricao: "${}" }) {
                            id
                        }
                    }
                `;*/
                const data = await client.request<{ insert_pessoa_one: { id: string }[] }>(getQuery);
                ids.push(data.insert_pessoa_one[0].id);
            }
        }
    });
    return Promise.resolve(ids);
}
/*
Osne-le-Val, Alto Marne, França => Haute-Marne
Esmirna, Esmirna, Turquia => İzmir
Fão, Minho, Portugal
Knittelfeld, Estíria, Áustria => Steiermark


DataInauguracao séc XIX e séc XX

*/

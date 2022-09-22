import { Platform } from 'react-native';

import { Table } from '@base-components';
import { Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';

export type TabelaTipoObrasProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
    tipologia?: boolean;
    zona?: boolean;
};

function headers({ tipo, tipos, tipologia, zona }: TabelaTipoObrasProps): string[] {
    const defaultHeaders = [
        tipo,
        `Total: ${tipos.length}`,
    ];

    if (Platform.OS !== 'web') {
        return defaultHeaders;
    } else {
        if (tipologia === true && zona === true) {
            return [
                ...defaultHeaders,
                'Tipologias/Obras',
                'Zonas/Bairros',
                'Bairros/Obras',
            ];
        } else if (tipologia === true) {
            return [
                ...defaultHeaders,
                'Tipologias/Obras',
                'Bairros/Obras',
            ];
        } else {
            return [
                ...defaultHeaders,
                'Zonas/Bairros',
                'Bairros/Obras',
            ];
        }
    }
}

function TabelaTipoObras({ tipo, tipos, tipologia, zona }: TabelaTipoObrasProps): JSX.Element {
    const rows = tipos.map((tipo) => {
        const rows = [
            tipo.nome,
            tipo.obras.length.toString(),
        ];

        if (Platform.OS === 'web') {
            if (tipologia === true) {
                const tipologias = tipo.obras
                    .map((obra) => obra.Tipologia ?? 'Desconhecida')
                    .reduce<string[]>((tipologias, tipologia) => {
                        if (!tipologias.includes(tipologia)) {
                            tipologias.push(tipologia);
                        }
                        return tipologias;
                    }, [])
                    .sort((a, b) => a.localeCompare(b))
                    .map((tipologia) => {
                        const obras = tipo.obras.filter((obra) => obra.Tipologia === tipologia || (tipologia === 'Desconhecida' && obra.Tipologia == null));

                        return {
                            nome: tipologia,
                            obras,
                        };
                    });

                rows.push(
                    tipologias
                        .map(
                            (tipologia) =>
                                `${tipologia.nome} (${tipologia.obras.length}): ${tipologia.obras
                                    .map((obra) => `${obra.Titulo ?? 'Desconhecida'} [${getYear(obra.DataInauguracao) ?? 'S.D.'}]`)
                                    .join(', ')}`,
                        )
                        .join('\n\n'),
                );
            }

            if (zona === true) {
                const zonas = tipo.obras
                    .map((obra) => obra.Zona ?? 'Desconhecida')
                    .reduce<string[]>((zonas, zona) => {
                        if (!zonas.includes(zona)) {
                            zonas.push(zona);
                        }
                        return zonas;
                    }, [])
                    .sort((a, b) => a.localeCompare(b))
                    .map((zona) => {
                        const obras = tipo.obras.filter((obra) => obra.Zona === zona || (zona === 'Desconhecida' && obra.Zona == null));

                        return {
                            nome: zona,
                            obras,
                        };
                    });

                rows.push(
                    zonas
                        .map((zona) => {
                            const bairros = zona.obras
                                .map((obra) => obra.Bairro ?? 'Desconhecida')
                                .reduce<string[]>((bairros, bairro) => {
                                    if (!bairros.includes(bairro)) {
                                        bairros.push(bairro);
                                    }
                                    return bairros;
                                }, [])
                                .sort((a, b) => a.localeCompare(b));
                            return `${zona.nome} (${bairros.length}): ${bairros.join(', ')}`;
                        })
                        .join('\n\n'),
                );
            }

            if (zona === true || (!zona && tipologia === true)) {
                const bairros = tipo.obras
                    .map((obra) => obra.Bairro ?? 'Desconhecida')
                    .reduce<string[]>((bairros, bairro) => {
                        if (!bairros.includes(bairro)) {
                            bairros.push(bairro);
                        }
                        return bairros;
                    }, [])
                    .sort((a, b) => a.localeCompare(b))
                    .map((bairro) => {
                        const obras = tipo.obras.filter((obra) => obra.Bairro === bairro || (bairro === 'Desconhecida' && obra.Bairro == null));

                        return {
                            nome: bairro,
                            obras,
                        };
                    });

                rows.push(
                    bairros
                        .map(
                            (bairro) =>
                                `${bairro.nome} (${bairro.obras.length}): ${bairro.obras
                                    .map((obra) => `${obra.Titulo ?? 'Desconhecida'} [${getYear(obra.DataInauguracao) ?? 'S.D.'}]`)
                                    .reduce<string[]>((titulos, titulo) => {
                                        if (!titulos.includes(titulo)) {
                                            titulos.push(titulo);
                                        }
                                        return titulos;
                                    }, [])
                                    .sort((a, b) => a.localeCompare(b))
                                    .join(', ')}`,
                        )
                        .join('\n\n'),
                );
            }
        }

        return rows;
    });

    const tamanhoColunaTipologia = Platform.OS !== 'web' ? undefined : 150;
    const tamanhoColunaTotal = 70;

    return (
        <Table
            headers={headers({ tipo, tipos, tipologia, zona })}
            rows={rows}
            widthArr={[
                tamanhoColunaTipologia,
                tamanhoColunaTotal,
                undefined,
            ]}
        />
    );
}

export default TabelaTipoObras;

import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@base-components';
import { Artista, Obra } from '@domain';
import { useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Block(): JSX.Element {
    const { theme } = useTheme();
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const anos_primeiro_mantado = [
        1993,
        1994,
        1995,
        1996,
    ];

    const obras_por_ano = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; obras: Obra[] }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && anos_primeiro_mantado.includes(year)) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        obras: Object.keys(typed_obra_artepublica)
                            .filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year)
                            .map((keyInt) => typed_obra_artepublica[keyInt]),
                    });
                }
            }

            return result;
        }, [])
        .sort((a, b) => (a.year > b.year ? 1 : -1));

    const tipologias = obras_por_ano
        .map((obra_ano) => obra_ano.obras.map((obra) => obra.Tipologia ?? 'Desconhecida'))
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(r, l);
            return r;
        }, [])
        .reduce<string[]>((r, e) => {
            if (r.find((top) => top === e) == null) {
                r.push(e);
            }
            return r;
        }, []);

    const total_tipologias = tipologias.reduce<{ type: string; name: string; data: (number | null)[] }[]>((series, tipologia) => {
        const total_tipologia = obras_por_ano.map((obra_ano) => {
            const total = obra_ano.obras.filter((obra) => obra.Tipologia === tipologia).length;
            return total > 0 ? total : null;
        });

        const serie = {
            type: 'column',
            name: tipologia,
            data: total_tipologia,
        };
        series.push(serie);
        return series;
    }, []) as SeriesOptionsType[];

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 800,
            type: 'column',
        },
        title: {
            text: '',
        },
        yAxis: {
            title: {
                text: '',
            },
            min: 0,
            stackLabels: {
                enabled: true,
                style: {
                    //fontWeight: 'bold',
                    textOutline: 'none',
                },
            },
            labels: {
                style: { color: '#CC1964' },
            },
        },
        xAxis: {
            categories: anos_primeiro_mantado.map((ano) => ano.toString()),
            labels: {
                style: { color: '#CC1964' },
            },
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            borderColor: '#CC1964',
            backgroundColor: theme.background,
            itemStyle: { color: '#CC1964' },
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                },
            },
        },
        series: total_tipologias,
    };

    return <Chart options={lineOptions} />;
}

function Network(): JSX.Element {
    const { theme } = useTheme();

    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const anos_primeiro_mantado = [
        1993,
        1994,
        1995,
        1996,
    ];

    const obras_do_mandato = Object.keys(typed_obra_artepublica).reduce<Obra[]>((result, key) => {
        const year = getYear(typed_obra_artepublica[key].DataInauguracao);
        if (year != null && anos_primeiro_mantado.includes(year)) {
            result.push(typed_obra_artepublica[key]);
        }

        return result;
    }, []);

    const titulos = obras_do_mandato.map((obra) => ({
        id: obra.Titulo ?? 'Deconhecida',
        marker: { radius: 15 },
        color: 'yellow',
    }));
    const autores = obras_do_mandato
        .map(
            (obra) =>
                obra.Autores ?? [
                    { Pessoa: { Nome: 'Desconhecida' } } as Artista,
                ],
        )
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(
                r,
                l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
            );
            return r;
        }, [])
        .reduce<{ id: string; marker: { radius: number }; color: string }[]>((r, autor) => {
            if (r.find((node) => node.id === autor) == null) {
                r.push({
                    id: autor ?? 'Deconhecida',
                    marker: { radius: 30 },
                    color: 'red',
                });
            }
            return r;
        }, []);

    const nodes = [{ id: 'Cesar Maia', marker: { radius: 50 }, color: 'blue' }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, autores);

    const data = autores.map((autor) => ({
        from: 'Cesar Maia',
        to: autor.id,
    }));

    Array.prototype.push.apply(
        data,
        autores
            .map((autor) => {
                const titulos_autor = obras_do_mandato
                    .filter(
                        (obra) =>
                            (obra.Autores != null && obra.Autores?.find((artista) => artista.Pessoa?.Nome === autor.id) != null) ||
                            (autor.id === 'Desconhecida' && obra.Autores == null),
                    )
                    .map((obra) => obra.Titulo);

                return titulos_autor.map((titulo) => ({
                    from: autor.id,
                    to: titulo,
                }));
            })
            .reduce((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []),
    );

    //TODO: como fazer Left->Right e n Circular??

    const networkOptions: Highcharts.Options | unknown = {
        chart: {
            height: 1080,
            type: 'networkgraph',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    linkLength: 200, // in pixels
                    enableSimulation: false,
                    //friction: -0.9,
                    integration: 'verlet',
                    approximation: 'barnes-hut',
                    initialPositions: 'circle',
                },
            },
        },
        series: [
            {
                name: '',
                accessibility: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: true,
                    linkFormat: '',
                    textPath: {
                        enabled: true,
                        attributes: {
                            //dy: 12,
                            //startOffset: '45%',
                            //textLength: 200,
                        },
                    },
                    allowOverlap: true,
                    color: theme.dark ? '#FFF' : undefined,
                },
                data,
                nodes,
            },
        ],
    };

    return <Chart options={networkOptions as Highcharts.Options} />;
}

function Sankey(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const anos_primeiro_mantado = [
        1993,
        1994,
        1995,
        1996,
    ];

    const obras_do_mandato = Object.keys(typed_obra_artepublica).reduce<Obra[]>((result, key) => {
        const year = getYear(typed_obra_artepublica[key].DataInauguracao);
        if (year != null && anos_primeiro_mantado.includes(year)) {
            result.push(typed_obra_artepublica[key]);
        }

        return result;
    }, []);

    const titulos = obras_do_mandato.map((obra) => ({
        id: obra.Titulo ?? 'Deconhecida',
        marker: { radius: 15 },
        color: getRandomColor(),
    }));
    const autores = obras_do_mandato
        .map(
            (obra) =>
                obra.Autores ?? [
                    { Pessoa: { Nome: 'Desconhecida' } } as Artista,
                ],
        )
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(
                r,
                l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
            );
            return r;
        }, [])
        .reduce<{ id: string; marker: { radius: number }; color: string }[]>((r, autor) => {
            if (r.find((node) => node.id === autor) == null) {
                r.push({
                    id: autor ?? 'Deconhecida',
                    marker: { radius: 30 },
                    color: getRandomColor(),
                });
            }
            return r;
        }, []);

    const nodes = [{ id: 'Cesar Maia', marker: { radius: 50 }, color: getRandomColor() }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, autores);

    const data = autores.map((autor) => ({
        from: 'Cesar Maia',
        to: autor.id,
        weight: 1,
    }));

    Array.prototype.push.apply(
        data,
        autores
            .map((autor) => {
                const titulos_autor = obras_do_mandato
                    .filter(
                        (obra) =>
                            (obra.Autores != null && obra.Autores?.find((artista) => artista.Pessoa?.Nome === autor.id) != null) ||
                            (autor.id === 'Desconhecida' && obra.Autores == null),
                    )
                    .map((obra) => obra.Titulo);

                return titulos_autor.map((titulo) => ({
                    from: autor.id,
                    to: titulo,
                    weight: 1,
                }));
            })
            .reduce((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []),
    );

    //TODO: como fazer Left->Right e n Circular?? - React-flow

    const networkOptions: Highcharts.Options | unknown = {
        chart: {
            height: 650,
            type: 'sankey',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    //linkLength: 200, // in pixels
                    enableSimulation: false,
                },
            },
        },
        series: [
            {
                name: '',
                accessibility: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: true,
                    linkFormat: '',
                },
                data,
                nodes,
            },
        ],
    };

    return <Chart options={networkOptions as Highcharts.Options} />;
}

//TODO: dropdown: prefeito/mandato (com e sem mandato selecionado)
function PublicArtCesarMaia(): JSX.Element {
    return (
        <ScrollView style={{ width: '100%' }}>
            <View>
                <Block />
            </View>
            <View style={{ paddingTop: 24 }}>
                <Network />
            </View>
            <View style={{ paddingTop: 24 }}>
                <Sankey />
            </View>
        </ScrollView>
    );
}

export default PublicArtCesarMaia;

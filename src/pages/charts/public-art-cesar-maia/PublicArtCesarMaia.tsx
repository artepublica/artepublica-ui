import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@base-components';
import { Artista, Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';
import { magenta } from '@utils/theme-provider/themes/cores';

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
        }, [])
        .sort((a, b) => a.localeCompare(b));

    const total_tipologias = tipologias.reduce<{ type: string; name: string; data: (number | null)[] }[]>((series, tipologia) => {
        const total_tipologia = obras_por_ano.map((obra_ano) => {
            const total = obra_ano.obras.filter((obra) => obra.Tipologia === tipologia).length;
            return total > 0 ? total : null;
        });

        const serie = {
            type: 'column',
            name: tipologia,
            data: total_tipologia,
            color: theme.tipologia[tipologia.toLowerCase() as keyof TipologiaTheme],
        };
        series.push(serie);
        return series;
    }, []) as SeriesOptionsType[];

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 600,
            width: 293,
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
                    color: theme.text.textColor,
                },
            },
            labels: {
                style: { color: theme.text.textColor },
            },
        },
        xAxis: {
            categories: anos_primeiro_mantado.map((ano) => ano.toString()),
            labels: {
                style: { color: theme.text.textColor },
            },
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            borderColor: theme.text.textColor,
            backgroundColor: theme.background,
            itemStyle: { color: theme.text.textColor },
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    style: {
                        textOutline: 'none',
                        color: theme.text.textColor,
                    },
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
                    marker: { radius: 10 },
                    color: '',
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.id.localeCompare(b.id))
        .map((a, index) => ({ ...a, color: theme.coresGrafico[index + 1] }));

    const titulos = obras_do_mandato.map((obra) => ({
        id: obra.Titulo ?? 'Deconhecida',
        marker: { radius: 5 },
        color: `${autores.filter((autor) => obra.Autores?.map((autorObra) => autorObra.Pessoa?.Nome).includes(autor.id))[0].color}80`,
    }));

    const nodes = [{ id: 'Cesar Maia', marker: { radius: 15 }, color: magenta }];
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
            height: 700,
            width: 576,
            type: 'networkgraph',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    //linkLength: 200, // in pixels
                    //enableSimulation: true,
                    friction: -0.9,
                    integration: 'verlet',
                    approximation: 'barnes-hut',
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        textOutline: 'none',
                        color: theme.text.textColor,
                    },
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
                    color: '#000000',
                    allowOverlap: false,
                },
                data,
                nodes,
            },
        ],
    };

    return <Chart options={networkOptions as Highcharts.Options} />;
}

function Sankey(): JSX.Element {
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
                    color: '',
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.id.localeCompare(b.id))
        .map((a, index) => ({ ...a, color: theme.coresGrafico[index + 1] }));

    const titulos = obras_do_mandato.map((obra) => ({
        id: obra.Titulo ?? 'Deconhecida',
        marker: { radius: 15 },
        color: `${autores.filter((autor) => obra.Autores?.map((autorObra) => autorObra.Pessoa?.Nome).includes(autor.id))[0].color}80`,
    }));

    const nodes = [{ id: 'Cesar Maia', marker: { radius: 50 }, color: magenta }];
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
            height: 1100,
            width: 576,
            type: 'sankey',
        },
        title: {
            text: '',
        },
        plotOptions: {
            sankey: {
                dataLabels: {
                    enabled: true,
                    style: {
                        textOutline: 'none',
                        //color: theme.text.textColor,
                    },
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

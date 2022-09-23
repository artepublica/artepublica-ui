import { useEffect, useState } from 'react';

import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart, Dropdown } from '@base-components';
import { Artista, Obra, Prefeito } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';
import * as prefeitos_mandatos from '@utils/data/prefeitos';
import reduceListOfList from '@utils/list/reduce-list-of-list';
import { magenta } from '@utils/theme-provider/themes/cores';

function Block({ obras, anos }: { obras: Obra[]; anos: number[] }): JSX.Element {
    const { theme } = useTheme();

    const obras_por_ano = obras
        .reduce<{ year: number; obras: Obra[] }[]>((result, obra) => {
            const year = getYear(obra.DataInauguracao);
            if (year != null && anos.includes(year)) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        obras: obras.filter((obraInt) => getYear(obraInt.DataInauguracao) === year).map((obraInt) => obraInt),
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
            categories: anos.map((ano) => ano.toString()),
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

function Network({ obras, anos, prefeito }: { obras: Obra[]; prefeito: string; anos: number[] }): JSX.Element {
    const { theme } = useTheme();

    const obras_do_mandato = obras.reduce<Obra[]>((result, obra) => {
        const year = getYear(obra.DataInauguracao);
        if (year != null && anos.includes(year)) {
            result.push(obra);
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

    const nodes = [{ id: prefeito, marker: { radius: 15 }, color: magenta }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, autores);

    const data = autores.map((autor) => ({
        from: prefeito,
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

function Sankey({ obras, anos, prefeito }: { obras: Obra[]; prefeito: string; anos: number[] }): JSX.Element {
    const { theme } = useTheme();

    const obras_do_mandato = obras.reduce<Obra[]>((result, obra) => {
        const year = getYear(obra.DataInauguracao);
        if (year != null && anos.includes(year)) {
            result.push(obra);
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

    const nodes = [{ id: prefeito, marker: { radius: 50 }, color: magenta }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, autores);

    const data = autores.map((autor) => ({
        from: prefeito,
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

function MandatoPrefeito({ obras }: { obras: Obra[] }): JSX.Element {
    const typed_prefeitos: Record<string, Prefeito> = prefeitos_mandatos;

    const items = Object.keys(typed_prefeitos)
        .map((key) => {
            const prefeito = typed_prefeitos[key];

            const mandatos = prefeito.Mandatos?.map((mandato) => ({
                label: `${mandato.DataInicio} - ${mandato.DataFim}`,
                value: `${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${mandato.DataInicio} - ${mandato.DataFim})`,
                parent: prefeito.Pessoa?.Nome ?? 'Desconhecida',
            }));

            return [
                {
                    label: prefeito.Pessoa?.Nome ?? 'Desconhecida',
                    value: prefeito.Pessoa?.Nome ?? 'Desconhecida',
                    selectable: false,
                },
                ...(mandatos ?? []),
            ];
        })
        .reduce(reduceListOfList);

    const [
        valorDropdown,
        setarDropdown,
    ] = useState('Cesar Epitácio Maia (01/01/1993 - 31/12/1996)');

    const prefeitos = Object.keys(typed_prefeitos).map((key) => typed_prefeitos[key]);

    const [
        anos,
        setarAnos,
    ] = useState<{ prefeito: string; anos: number[] }>({ prefeito: '', anos: [] });

    useEffect(() => {
        const prefeito = prefeitos.filter((prefeito) => {
            const mandatos = prefeito.Mandatos?.filter(
                (mandato) => `${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${mandato.DataInicio} - ${mandato.DataFim})` === valorDropdown,
            );
            return mandatos != null && mandatos.length > 0;
        })[0];
        console.log(prefeito);

        const mandato = prefeito.Mandatos?.filter(
            (mandato) => `${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${mandato.DataInicio} - ${mandato.DataFim})` === valorDropdown,
        )[0];

        console.log(mandato);

        const anoInicio = getYear(mandato?.DataInicio);
        const anoFim = getYear(mandato?.DataFim);
        console.log(anoInicio);
        console.log(anoFim);

        const anosIntern: number[] = [];
        for (let i = anoInicio as number; i <= (anoFim as number); i++) {
            anosIntern.push(i);
        }
        console.log(anosIntern);
        setarAnos({ prefeito: prefeito.Pessoa?.Nome ?? 'Desconhecida', anos: anosIntern });
    }, [valorDropdown]);

    return (
        <ScrollView style={{ width: '100%' }}>
            <Dropdown valor={valorDropdown} setarValor={setarDropdown} items={items} />
            <View>
                <Block obras={obras} anos={anos.anos} />
            </View>
            <View style={{ paddingTop: 24 }}>
                <Network obras={obras} anos={anos.anos} prefeito={anos.prefeito} />
            </View>
            <View style={{ paddingTop: 24 }}>
                <Sankey obras={obras} anos={anos.anos} prefeito={anos.prefeito} />
            </View>
        </ScrollView>
    );
}

export default MandatoPrefeito;

import { useState } from 'react';

import { SeriesOptionsType } from 'highcharts';
import { ScrollView, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Table, Chart } from '@base-components';
import { Artista, Obra } from '@domain';
import { useTheme } from '@utils';
import * as dedadas from '@utils/data/decadas';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function Line({ category }: { category: string }): JSX.Element {
    const { theme } = useTheme();
    const all: Record<string, Obra[]> = dedadas.all;

    const total = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => [
            Date.UTC(parseInt(key, 10), 1),
            all[key].length,
        ]);

    const total_category = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => [
            Date.UTC(parseInt(key, 10), 1),
            all[key].filter((obra) => obra.Categoria === category).length,
        ]);

    const series = [
        {
            type: 'line',
            name: 'Total',
            data: total,
        } as SeriesOptionsType,
        {
            type: 'line',
            name: category,
            data: total_category,
        } as SeriesOptionsType,
    ];

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 600,
            type: 'line',
        },
        title: {
            text: '',
        },
        yAxis: {
            title: {
                text: '',
            },
            min: 0,
            labels: {
                style: { color: theme.text.textColor },
            },
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%Y',
                year: '%Y',
            },
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
        series,
    };

    return <Chart options={lineOptions} />;
}

function Network({ category, autor }: { category: string; autor?: string }): JSX.Element {
    const { theme } = useTheme();
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const obras: Obra[] = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Categoria === category)
        .filter(
            (key) =>
                (typed_obra_artepublica[key].Autores != null &&
                    typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === autor) != null) ||
                (autor === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
        )
        .map((key) => typed_obra_artepublica[key]);

    const titulos = obras.map((obra) => ({
        id: obra.Titulo ?? 'Deconhecida',
        marker: { radius: 5 },
        color: 'yellow',
    }));
    const tipologias = obras
        .map((obra) => ({
            id: obra.Tipologia ?? 'Deconhecida',
            marker: { radius: 10 },
            color: 'red',
        }))
        .reduce<{ id: string }[]>((r, e) => {
            if (r.find((tip) => tip.id === e.id) == null) {
                r.push(e);
            }
            return r;
        }, []);

    const nodes = [{ id: autor, marker: { radius: 20 }, color: 'blue' }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, tipologias);

    const data = tipologias.map((tipologia) => ({
        from: autor,
        to: tipologia.id,
    }));

    Array.prototype.push.apply(
        data,
        tipologias
            .map((tipologia) => {
                const titulos_tipologia = Object.keys(typed_obra_artepublica)
                    .filter((key) => typed_obra_artepublica[key].Categoria === category)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Autores != null &&
                                typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === autor) != null) ||
                            (autor === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
                    )
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Tipologia != null && typed_obra_artepublica[key].Tipologia === tipologia.id) ||
                            (tipologia.id === 'Desconhecida' && typed_obra_artepublica[key].Tipologia == null),
                    )
                    .map((key) => typed_obra_artepublica[key].Titulo);

                return titulos_tipologia.map((titulo) => ({
                    from: tipologia.id,
                    to: titulo,
                }));
            })
            .reduce((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []),
    );

    const networkOptions: Highcharts.Options | unknown = {
        chart: {
            height: 600,
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

function Category(): JSX.Element {
    const { theme } = useTheme();

    const [
        open,
        setOpen,
    ] = useState(false);
    const [
        category,
        setValue,
    ] = useState('Narratividade');
    const [
        items,
        setItems,
    ] = useState([
        { label: 'Narratividade', value: 'Narratividade' },
        { label: 'Plasticidade', value: 'Plasticidade' },
        { label: 'Sublimidade', value: 'Sublimidade' },
    ]);

    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const tipologias: string[] = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Categoria === category)
        .map((key) => typed_obra_artepublica[key].Tipologia ?? 'Desconhecida');
    const naturezas: string[] = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Categoria === category)
        .map((key) => typed_obra_artepublica[key].Natureza ?? 'Desconhecida');
    const artistas: string[] = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Categoria === category)
        .map<Artista[]>(
            (key) =>
                typed_obra_artepublica[key].Autores ?? [
                    { Pessoa: { Nome: 'Desconhecida' } } as Artista,
                ],
        )
        .reduce<string[]>((r, l) => {
            Array.prototype.push.apply(
                r,
                l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
            );
            return r;
        }, []);

    const tipologias_total: { nome: string; total: number }[] = tipologias
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: tipologias.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const naturezas_total: { nome: string; total: number }[] = naturezas
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
            const r_top = r.find((top) => top.nome === a);
            if (!r_top) {
                r.push({
                    nome: a,
                    total: naturezas.filter((top) => top === a).length,
                });
            }
            return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const artistas_total_obras: {
        nome: string;
        total: number;
        obras: { nome: string; inauguracao: string }[];
    }[] = artistas.reduce<{ nome: string; total: number; obras: { nome: string; inauguracao: string }[] }[]>(function (r, a) {
        const r_top = r.find((top) => top.nome === a);
        if (!r_top) {
            const obras: { nome: string; inauguracao: string }[] = Object.keys(typed_obra_artepublica)
                .filter((key) => typed_obra_artepublica[key].Categoria === category)
                .filter(
                    (key) =>
                        (typed_obra_artepublica[key].Autores != null &&
                            typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === a) != null) ||
                        (a === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
                )
                .map((key) => ({
                    nome: typed_obra_artepublica[key].Titulo ?? 'Desconhecida',
                    inauguracao: typed_obra_artepublica[key].DataInauguracao ?? 'Desconhecida',
                }));

            r.push({
                nome: a,
                total: obras.length,
                obras,
            });
        }
        return r;
    }, []);

    let artistas_total = [...artistas_total_obras];
    artistas_total = artistas_total.sort((a, b) => a.nome.localeCompare(b.nome));

    let artistas_total_sort_total = [...artistas_total];
    artistas_total_sort_total = artistas_total_sort_total.sort((a, b) => (a.total < b.total ? 1 : -1));

    let artista: string | undefined;
    if (artistas_total_sort_total.length > 0) {
        if (artistas_total_sort_total[0].nome !== 'Desconhecida') {
            artista = artistas_total_sort_total[0].nome;
        } else if (artistas_total_sort_total.length > 1) {
            if (artistas_total_sort_total[1].nome !== 'Desconhecida') {
                artista = artistas_total_sort_total[1].nome;
            }
        }
    }

    const style = styles();
    return (
        <View style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <DropDownPicker
                    theme={theme.dark ? 'DARK' : 'LIGHT'}
                    open={open}
                    value={category}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    textStyle={{ color: theme.text.textColor }}
                    //arrowIconStyle={{ backgroundColor: theme.text.textColor }}
                    dropDownContainerStyle={{ borderColor: theme.text.textColor }}
                    selectedItemContainerStyle={{ backgroundColor: '#F2D7E3' }}
                    style={{ borderColor: theme.text.textColor }}
                    arrowIconContainerStyle={{ borderColor: theme.text.textColor }}
                    //iconContainerStyle={{ borderColor: theme.text.textColor }}
                    showTickIcon={false}
                />
                <View style={{ height: 12 }} />

                <Table
                    headers={[
                        'Tipologia',
                        `Total: ${tipologias_total.length}`,
                    ]}
                    rows={tipologias_total.map((top) => [
                        top.nome,
                        top.total.toString(),
                    ])}
                />
                <View style={{ height: 12 }} />

                <Table
                    headers={[
                        'Natureza',
                        `Total: ${naturezas_total.length}`,
                    ]}
                    rows={naturezas_total.map((top) => [
                        top.nome,
                        top.total.toString(),
                    ])}
                />
                <View style={{ height: 12 }} />

                <Table
                    headers={[
                        'Natureza',
                        `Total: ${artistas_total.length}`,
                        'Obras',
                    ]}
                    rows={artistas_total.map((top) => [
                        top.nome,
                        top.total.toString(),
                        top.obras.map((obra) => `${obra.nome} (${obra.inauguracao})`).join(', '),
                    ])}
                />
                <View style={{ height: 12 }} />

                <View>
                    <Line category={category} />
                </View>
                <View style={{ height: 12 }} />

                {artista && (
                    <View>
                        <Network category={category} autor={artista} />
                    </View>
                )}
                <View style={{ height: 12 }} />
            </ScrollView>
        </View>
    );
}

function styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        head: { height: 40 },
    });
}

export default Category;

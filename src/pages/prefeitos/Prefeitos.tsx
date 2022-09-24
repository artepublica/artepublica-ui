import { useState } from 'react';

import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart, Dropdown } from '@base-components';
import { Obra, Prefeito } from '@domain';
import { useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';
import * as prefeitos_mandatos from '@utils/data/prefeitos';
import reduceListOfList from '@utils/list/reduce-list-of-list';

function Block({ obras, mandatos }: { obras: Obra[]; mandatos: string[] }): JSX.Element {
    console.log(mandatos);
    const { theme } = useTheme();

    const typed_prefeitos: Record<string, Prefeito> = prefeitos_mandatos;

    const prefeitos = Object.keys(typed_prefeitos).map((key) => typed_prefeitos[key]);
    const prefeitosSelecionados = prefeitos.filter((prefeito) => {
        const mandatosIntern = prefeito.Mandatos?.filter((mandato) =>
            mandatos.includes(`${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${mandato.DataInicio} - ${mandato.DataFim})`),
        );
        return mandatosIntern != null && mandatosIntern.length > 0;
    });

    const anosSelecionados: number[] = [];
    prefeitosSelecionados.forEach((prefeito) => {
        const mandato = prefeito.Mandatos?.filter((mandato) =>
            mandatos.includes(`${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${mandato.DataInicio} - ${mandato.DataFim})`),
        )[0];

        const anoInicio = getYear(mandato?.DataInicio);
        const anoFim = getYear(mandato?.DataFim);

        for (let i = anoInicio as number; i <= (anoFim as number); i++) {
            anosSelecionados.push(i);
        }
    });
    anosSelecionados.sort((a, b) => (a > b ? 1 : -1));

    const obras_por_ano = obras
        .reduce<{ year: number; obras: Obra[] }[]>((result, obra) => {
            const year = getYear(obra.DataInauguracao);
            if (year != null && anosSelecionados.includes(year)) {
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

    const total_prefeitos = prefeitosSelecionados.reduce<{ type: string; name: string; data: (number | null)[] }[]>((series, prefeito) => {
        const mandatosSelecionados = prefeito.Mandatos?.filter((mandato) =>
            mandatos.includes(`${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${mandato.DataInicio} - ${mandato.DataFim})`),
        );

        const total_prefeito: (number | null)[] = [];

        anosSelecionados.forEach((anoSelecionado) => {
            mandatosSelecionados?.forEach((mandato) => {
                const anoInicio = getYear(mandato?.DataInicio);
                const anoFim = getYear(mandato?.DataFim);

                if ((anoInicio ?? 0) <= anoSelecionado && (anoFim ?? 0) >= anoSelecionado) {
                    //TODO possivel aqui
                    const total_ano = obras_por_ano.map((obra_ano) => {
                        return obra_ano.year === anoSelecionado ? obra_ano.obras.length : 0;
                    }).length;
                    total_prefeito.push(total_ano);
                } else {
                    total_prefeito.push(null);
                }
            });
        });

        series.push({
            type: 'column',
            name: prefeito.Pessoa?.Nome ?? 'Desconhecida',
            data: total_prefeito,
        });

        return series;
    }, []) as SeriesOptionsType[];

    const lineOptions: Highcharts.Options = {
        chart: {
            height: 600,
            //width: 293,
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
            categories: anosSelecionados.map((ano) => ano.toString()),
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
        series: total_prefeitos,
    };

    return <Chart options={lineOptions} />;
}

function Prefeitos({ obras }: { obras: Obra[] }): JSX.Element {
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
    ] = useState(['Cesar Epitácio Maia (01/01/1993 - 31/12/1996)']);

    return (
        <ScrollView style={{ width: '100%' }}>
            <Dropdown valor={valorDropdown} setarValor={setarDropdown} items={items} multiple />
            <View>
                <Block obras={obras} mandatos={valorDropdown} />
            </View>
        </ScrollView>
    );
}

export default Prefeitos;

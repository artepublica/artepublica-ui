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
    const { theme } = useTheme();
    const typed_prefeitos: Record<string, Prefeito> = prefeitos_mandatos;

    const prefeitos = Object.keys(typed_prefeitos).map((key) => typed_prefeitos[key]);
    const prefeitosSelecionados = prefeitos.filter((prefeito) => {
        const mandatosIntern = prefeito.Mandatos?.filter((mandato) =>
            mandatos.includes(`${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${getYear(mandato.DataInicio)} - ${getYear(mandato.DataFim)})`),
        );
        return mandatosIntern != null && mandatosIntern.length > 0;
    });

    const anosMandatosSelecionados: number[] = [];
    prefeitosSelecionados.forEach((prefeito) => {
        const mandatosSelecionados = prefeito.Mandatos?.filter((mandato) =>
            mandatos.includes(`${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${getYear(mandato.DataInicio)} - ${getYear(mandato.DataFim)})`),
        );

        mandatosSelecionados?.forEach((mandato) => {
            const anoInicio = getYear(mandato?.DataInicio);
            const anoFim = getYear(mandato?.DataFim);

            for (let i = anoInicio as number; i <= (anoFim as number); i++) {
                anosMandatosSelecionados.push(i);
            }
        });
    });
    const anosSelecionados = anosMandatosSelecionados
        .sort((a, b) => (a > b ? 1 : -1))
        .reduce<number[]>((resultado, anoSelecionado, index) => {
            if (index === 0 || index === anosMandatosSelecionados.length - 1 || anosMandatosSelecionados[index + 1] === anoSelecionado + 1) {
                resultado.push(anoSelecionado);
            } else {
                for (let i = anoSelecionado; i < anosMandatosSelecionados[index + 1]; i++) {
                    resultado.push(i);
                }
            }
            return resultado;
        }, []);

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

    const total_prefeitos = prefeitosSelecionados.reduce<{ type: string; name: string; data: (number | null)[]; color?: string }[]>(
        (series, prefeito, index) => {
            const mandatosSelecionados = prefeito.Mandatos?.filter((mandato) =>
                mandatos.includes(`${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${getYear(mandato.DataInicio)} - ${getYear(mandato.DataFim)})`),
            );

            const total_prefeito: (number | null)[] = [];

            anosSelecionados.forEach((anoSelecionado) => {
                let anoAchado = false;
                mandatosSelecionados?.forEach((mandato) => {
                    const anoInicio = getYear(mandato?.DataInicio);
                    const anoFim = getYear(mandato?.DataFim);

                    if ((anoInicio ?? 0) <= anoSelecionado && (anoFim ?? 0) >= anoSelecionado) {
                        //TODO possivel aqui
                        const obrasAno = obras_por_ano.filter((obra_ano) => {
                            return obra_ano.year === anoSelecionado;
                        });
                        total_prefeito.push(obrasAno.length > 0 ? obrasAno[0].obras.length : null);
                        anoAchado = true;
                    }
                });

                if (!anoAchado) {
                    total_prefeito.push(null);
                }
            });

            series.push({
                type: 'column',
                name: prefeito.Pessoa?.Nome ?? 'Desconhecida',
                data: total_prefeito,
                color: theme.coresGrafico[index],
            });

            return series;
        },
        [],
    ) as SeriesOptionsType[];

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
        .map((key) => typed_prefeitos[key])
        .sort((a, b) => {
            const aPrimeiroMantado = a.Mandatos?.sort((aM, bM) => ((getYear(aM.DataInicio) ?? 0) < (getYear(bM.DataInicio) ?? 0) ? 1 : -1))[0];
            const bPrimeiroMantado = b.Mandatos?.sort((aM, bM) => ((getYear(aM.DataInicio) ?? 0) < (getYear(bM.DataInicio) ?? 0) ? 1 : -1))[0];

            return (getYear(aPrimeiroMantado?.DataInicio) ?? 0) < (getYear(bPrimeiroMantado?.DataInicio) ?? 0) ? 1 : -1;
        })
        .map((prefeito) => {
            const mandatos = prefeito.Mandatos?.sort((aM, bM) => ((getYear(aM.DataInicio) ?? 0) > (getYear(bM.DataInicio) ?? 0) ? 1 : -1)).map((mandato) => ({
                label: `${mandato.DataInicio} - ${mandato.DataFim}`,
                value: `${prefeito.Pessoa?.Nome ?? 'Desconhecida'} (${getYear(mandato.DataInicio)} - ${getYear(mandato.DataFim)})`,
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
    ] = useState([
        'Cesar Epitácio Maia (1993 - 1996)',
        'Luiz Paulo Fernandez Conde (1997 - 2000)',
        'Marcelo Nunes de Allencar (1989 - 1992)',
    ]);

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

import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, View } from 'react-native';

import { Chart } from '@base-components';
import { Obra } from '@domain';
import { useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';
import { azul3, laranja2, verde3 } from '@utils/theme-provider/themes/cores';

function Block(): JSX.Element {
    const { theme } = useTheme();
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const total_anterior = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1989 && year <= 1992) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number | null][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total > 0 ? year.total : null,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const total = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1993 && year <= 1996) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number | null][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total > 0 ? year.total : null,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const total_proximo = Object.keys(typed_obra_artepublica)
        .reduce<{ year: number; total: number }[]>((result, key) => {
            const year = getYear(typed_obra_artepublica[key].DataInauguracao);
            if (year != null && year >= 1997 && year <= 2000) {
                const y = result.find((t) => t.year === year);

                if (y == null) {
                    result.push({
                        year,
                        total: Object.keys(typed_obra_artepublica).filter((keyInt) => getYear(typed_obra_artepublica[keyInt].DataInauguracao) === year).length,
                    });
                }
            }

            return result;
        }, [])
        .reduce<[number, number | null][]>((result, year) => {
            result.push([
                Date.UTC(year.year, 1),
                year.total > 0 ? year.total : null,
            ]);
            return result;
        }, [])
        .sort((a, b) => (a[0] > b[0] ? 1 : -1));

    const series = [
        {
            type: 'column',
            name: 'Marcelo Alencar',
            color: laranja2,
            data: [
                ...total_anterior.map((item) => item[1]),
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ],
        } as SeriesOptionsType,
        {
            type: 'column',
            name: 'Cesar Maia',
            data: [
                null,
                null,
                null,
                null,
                ...total.map((item) => item[1]),
                null,
                null,
                null,
                null,
            ],
            color: azul3,
        } as SeriesOptionsType,
        {
            type: 'column',
            name: 'Luiz Paulo Conde',
            data: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                ...total_proximo.map((item) => item[1]),
            ],
            color: verde3,
        } as SeriesOptionsType,
    ];

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
            categories: [
                '1989',
                '1990',
                '1991',
                '1992',
                '1993',
                '1994',
                '1995',
                '1996',
                '1997',
                '1998',
                '1999',
                '2000',
            ],
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
        series,
    };

    return <Chart options={lineOptions} />;
}

function PublicArtTotal19892000(): JSX.Element {
    return (
        <ScrollView style={{ width: '100%' }}>
            <View style={{ paddingTop: 24 }}>
                <Block />
            </View>
        </ScrollView>
    );
}

export default PublicArtTotal19892000;

import { useState } from 'react';

import { useHeaderHeight } from '@react-navigation/elements';
import Highcharts, { AlignValue, AxisTypeValue, OptionsStackingValue, SeriesOptionsType } from 'highcharts';
import { ScrollView, useWindowDimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Chart } from '@base-components';
import { Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';
import * as dedadas from '@utils/data/decadas';

import styles from './styles';

type Tipo_DecadaProps = {
    tipo: string;
};

function Tipo_Decada({ tipo }: Tipo_DecadaProps): JSX.Element {
    const { theme } = useTheme();
    const { width, height } = useWindowDimensions();
    const headerHeight = useHeaderHeight();
    const insets = useSafeAreaInsets();
    const style = styles();

    const all: Record<string, Obra[]> = dedadas.all;

    function MapAutor(key: string): string[] {
        return all[key]
            .map((obra) => obra.Autores ?? [{ Pessoa: { Nome: 'Desconhecida' } }])
            .reduce<string[]>((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []);
    }

    const tipos = Object.keys(all)
        .filter((key) => key !== 'null' && all[key].length > 0)
        .map((key) => (tipo === 'Autor' ? MapAutor(key) : all[key].map((obra) => obra[tipo as keyof Obra] ?? 'Desconhecida')))
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

    const total_tipos = tipos.reduce<{ type: string; name: string; data: (number | null)[] }[]>((series, _tipo) => {
        const total_tipo = Object.keys(all)
            .filter((key) => key !== 'null' && all[key].length > 0)
            .map((key) => {
                const total = all[key].filter(
                    (obra) => obra[tipo as keyof Obra] === _tipo || (obra[tipo as keyof Obra] == null && _tipo === 'Desconhecida'),
                ).length;
                return total > 0 ? total : null;
            });

        const serie = {
            type: 'column',
            name: _tipo,
            data: total_tipo,
            color: theme.tipologia[_tipo.toLowerCase() as keyof TipologiaTheme] ?? theme.tipologia.desconhecida,
        };
        series.push(serie);
        return series;
    }, []) as SeriesOptionsType[];

    const streamgraphSeries = tipos.reduce<{ type: string; name: string; data: (number | null)[] }[]>((series, _tipo) => {
        const total_tipo = Object.keys(all)
            .filter((key) => key !== 'null' && all[key].length > 0)
            .map((key) => {
                const total = all[key].filter(
                    (obra) => obra[tipo as keyof Obra] === _tipo || (obra[tipo as keyof Obra] == null && _tipo === 'Desconhecida'),
                ).length;
                return total;
            });

        const serie = {
            type: 'streamgraph',
            name: _tipo,
            data: total_tipo,
            color: theme.tipologia[_tipo.toLowerCase() as keyof TipologiaTheme] ?? theme.tipologia.desconhecida,
        };
        series.push(serie);
        return series;
    }, []) as SeriesOptionsType[];

    const columnOptions: Highcharts.Options = {
        chart: {
            type: 'column',
            height: height - insets.top - headerHeight - 68 - 24 - 50,
            width: width - 48,
            marginBottom: null as unknown as number,
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: Object.keys(all).filter((key) => key !== 'null' && all[key].length > 0),
            maxPadding: null as unknown as number,
            type: null as unknown as AxisTypeValue,
            crosshair: null as unknown as boolean,
            labels: {
                align: null as unknown as AlignValue,
                reserveSpace: null as unknown as boolean,
                rotation: null as unknown as number,
                style: { color: theme.text.textColor },
            },
            lineWidth: null as unknown as number,
            margin: null as unknown as number,
            tickWidth: null as unknown as number,
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
            visible: null as unknown as boolean,
            startOnTick: null as unknown as boolean,
            endOnTick: null as unknown as boolean,
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
                },
            },
            series: {
                label: {
                    minFontSize: null as unknown as number,
                    maxFontSize: null as unknown as number,
                    style: {
                        color: null as unknown as string,
                    },
                },
                accessibility: {
                    exposeAsGroupOnly: null as unknown as boolean,
                },
            },
        },
        series: total_tipos,
    };

    const streamgraphOptions: Highcharts.Options = {
        chart: {
            type: 'streamgraph',
            height: height - insets.top - headerHeight - 68 - 24 - 50,
            width: width - 48,
            //marginBottom: width > 1000 ? 60 : width > 800 ? 80 : width > 450 ? 100 : width > 350 ? 110 : 160,
            marginBottom: width < 367 ? 170 : width < 400 ? 110 : width < 450 ? 120 : width < 500 ? 100 : width < 650 ? 90 : width < 850 ? 80 : 60,
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: Object.keys(all).filter((key) => key !== 'null' && all[key].length > 0),
            maxPadding: 0,
            type: 'category',
            crosshair: true,
            labels: {
                align: 'left',
                reserveSpace: false,
                rotation: 270,
                style: { color: theme.text.textColor },
            },
            lineWidth: 0,
            margin: 20,
            tickWidth: 0,
        },
        yAxis: {
            title: {
                text: null as unknown as string,
            },
            min: null as unknown as number,
            stackLabels: {
                enabled: null as unknown as boolean,
                style: {
                    fontWeight: null as unknown as string,
                    textOutline: null as unknown as string,
                },
            },
            visible: false,
            startOnTick: false,
            endOnTick: false,
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            borderColor: theme.text.textColor,
            backgroundColor: theme.background,
            itemStyle: { color: theme.text.textColor },
        },
        annotations: [
            {
                labelOptions: {
                    //backgroundColor: 'rgba(255,255,255,0.5)',
                    //borderColor: 'silver',
                },
            },
        ],
        plotOptions: {
            column: {
                stacking: null as unknown as OptionsStackingValue,
                dataLabels: {
                    enabled: null as unknown as boolean,
                },
            },
            series: {
                label: {
                    minFontSize: 15,
                    maxFontSize: 15,
                    style: {
                        color: '#FFF',
                        fontFamily: 'Arial',
                    },
                },
                accessibility: {
                    exposeAsGroupOnly: true,
                },
            },
        },
        series: streamgraphSeries,
    };

    const [
        open,
        setOpen,
    ] = useState(false);
    const [
        value,
        setValue,
    ] = useState('1');
    const [
        items,
        setItems,
    ] = useState([
        { label: 'Coluna', value: '0' },
        { label: 'Stream', value: '1' },
    ]);

    return (
        <ScrollView style={style.container}>
            <DropDownPicker
                theme={theme.dark ? 'DARK' : 'LIGHT'}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                scrollViewProps={{
                    nestedScrollEnabled: true,
                }}
                textStyle={{ color: theme.text.textColor }}
                //arrowIconStyle={{ backgroundColor: '#CC1964 !important' }}
                dropDownContainerStyle={{ borderColor: theme.text.textColor }}
                selectedItemContainerStyle={{ backgroundColor: '#F2D7E3' }}
                style={{ borderColor: theme.text.textColor }}
                arrowIconContainerStyle={{ borderColor: theme.text.textColor }}
                //iconContainerStyle={{ borderColor: '#CC1964 !important' }}
                showTickIcon={false}
            />
            <Chart options={(value === '0' ? columnOptions : streamgraphOptions) as Highcharts.Options} />
        </ScrollView>
    );
}

export default Tipo_Decada;

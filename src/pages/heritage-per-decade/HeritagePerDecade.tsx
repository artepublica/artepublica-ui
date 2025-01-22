import { useState } from 'react';

import { useHeaderHeight } from '@react-navigation/elements';
import Highcharts, {
  AlignValue,
  AxisTypeValue,
  OptionsStackingValue,
  SeriesOptionsType,
} from 'highcharts';
import { ScrollView, useWindowDimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Chart } from '@base-components';
import { decades } from '@data';
import { Heritage } from '@domain';
import { TypologyTheme, useTheme } from '@utils';

import styles from './styles';

type HeritagePerDecadeProps = {
  type: keyof Heritage;
};

function HeritagePerDecade({ type }: HeritagePerDecadeProps): JSX.Element {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const style = styles();

  const all: Record<string, Heritage[]> = decades;

  function MapAuthor(key: string): string[] {
    return all[key]
      .map(
        (heritage) => heritage.Authors ?? [{ Name: { Name: 'Desconhecida' } }],
      )
      .reduce<string[]>((r, l) => {
        Array.prototype.push.apply(r, l);
        return r;
      }, []);
  }

  const types = Object.keys(all)
    .filter((key) => key !== 'null' && all[key].length > 0)
    .map((key) =>
      type === 'Authors'
        ? MapAuthor(key)
        : all[key].map((heritage) => heritage[type] ?? 'Desconhecida'),
    )
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

  const typesTotal = types.reduce<
    { type: string; name: string; data: (number | null)[] }[]
  >((series, typology) => {
    const typeTotal = Object.keys(all)
      .filter((key) => key !== 'null' && all[key].length > 0)
      .map((key) => {
        const total = all[key].filter(
          (heritage) =>
            heritage[type] === typology ||
            (heritage[type] == null && typology === 'Desconhecida'),
        ).length;
        return total > 0 ? total : null;
      });

    const serie = {
      type: 'column',
      name: typology,
      data: typeTotal,
      color:
        theme.typology[typology.toLowerCase() as keyof TypologyTheme] ??
        theme.typology.desconhecida,
    };
    series.push(serie);
    return series;
  }, []) as SeriesOptionsType[];

  const streamgraphSeries = types.reduce<
    { type: string; name: string; data: (number | null)[] }[]
  >((series, _tipo) => {
    const typeTotal = Object.keys(all)
      .filter((key) => key !== 'null' && all[key].length > 0)
      .map((key) => {
        const total = all[key].filter(
          (heritage) =>
            heritage[type] === _tipo ||
            (heritage[type] == null && _tipo === 'Desconhecida'),
        ).length;
        return total;
      });

    const serie = {
      type: 'streamgraph',
      name: _tipo,
      data: typeTotal,
      color:
        theme.typology[_tipo.toLowerCase() as keyof TypologyTheme] ??
        theme.typology.desconhecida,
    };
    series.push(serie);
    return series;
  }, []) as SeriesOptionsType[];

  const columnOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      height: height - insets.top - headerHeight - 68 - 24 - 50,
      width: width - 24,
      marginBottom: null as unknown as number,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: Object.keys(all).filter(
        (key) => key !== 'null' && all[key].length > 0,
      ),
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
    series: typesTotal,
  };

  const streamgraphOptions: Highcharts.Options = {
    chart: {
      type: 'streamgraph',
      height: height - insets.top - headerHeight - 68 - 24 - 50,
      width: width - 24,
      //marginBottom: width > 1000 ? 60 : width > 800 ? 80 : width > 450 ? 100 : width > 350 ? 110 : 160,
      marginBottom:
        width < 367
          ? 170
          : width < 400
            ? 110
            : width < 450
              ? 120
              : width < 500
                ? 100
                : width < 650
                  ? 90
                  : width < 850
                    ? 80
                    : 60,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: Object.keys(all).filter(
        (key) => key !== 'null' && all[key].length > 0,
      ),
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

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('1');
  const [items, setItems] = useState([
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
        listMode='SCROLLVIEW'
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
      <Chart options={value === '0' ? columnOptions : streamgraphOptions} />
    </ScrollView>
  );
}

export default HeritagePerDecade;

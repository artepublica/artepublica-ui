import { useState } from 'react';

import { useHeaderHeight } from '@react-navigation/elements';
import { ScrollView, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Chart, Dropdown } from '@base-components';
import { Heritage } from '@domain';
import { getYear, TypologyTheme, useTheme, vinho } from '@utils';

import styles from './styles';

type HeritageAuthorTypologyNetworkProps = {
  type: keyof Heritage;
  types: { name: string; heritages: Heritage[] }[];
};

function HeritageAuthorTypologyNetwork({
  type,
  types,
}: HeritageAuthorTypologyNetworkProps): JSX.Element {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const names = [...types]
    .map((type) => type.name ?? 'Desconhecida')
    .sort((a, b) => a.localeCompare(b));

  const typesSortedByTotal = [...types]
    .filter((type) => type.name !== 'Desconhecida')
    .sort((a, b) => (a.heritages.length < b.heritages.length ? 1 : -1));
  const authorWithMostHeritage = typesSortedByTotal[0].name ?? 'Desconhecida';

  const [dropdownValue, setDropdown] = useState(authorWithMostHeritage);

  const style = styles();

  const selected = types.filter(
    (type) => (type.name ?? 'v') === dropdownValue,
  )[0];

  const typologies = selected.heritages
    .map((heritage) => {
      const typology = heritage.Typology ?? 'Deconhecida';
      const color =
        theme.typology[typology.toLowerCase() as keyof TypologyTheme] ??
        theme.typology.desconhecida;
      return {
        id: typology,
        marker: { radius: 20 },
        color,
      };
    })
    .reduce<{ id: string; marker: { radius: number }; color: string }[]>(
      (r, e) => {
        if (r.find((tip) => tip.id === e.id) == null) {
          r.push(e);
        }
        return r;
      },
      [],
    );

  const titles = selected.heritages.map((heritage) => ({
    id: `${heritage.Title ?? 'Deconhecida'} (${getYear(heritage.OpeningDate) ?? 's.d.'})`,
    marker: { radius: 10 },
    color: `${typologies.find((typology) => typology.id === (heritage.Typology ?? 'Desconhecida'))?.color}80`,
  }));

  const nodes = [{ id: selected.name, marker: { radius: 30 }, color: vinho }];
  Array.prototype.push.apply(nodes, titles);
  Array.prototype.push.apply(nodes, typologies);

  const data = typologies.map((typology) => ({
    from: selected.name,
    to: typology.id,
  }));

  Array.prototype.push.apply(
    data,
    typologies
      .map((typology) => {
        const typology_titles = selected.heritages
          .filter((heritage) =>
            type !== 'Authors'
              ? heritage[type] === selected.name
              : heritage.Authors?.find(
                  (author) => author.Person?.Name === selected.name,
                ) != null,
          )
          .filter(
            (heritage) =>
              (heritage.Typology != null &&
                heritage.Typology === typology.id) ||
              (typology.id === 'Desconhecida' && heritage.Typology == null),
          )
          .map(
            (heritage) =>
              `${heritage.Title ?? 'Deconhecida'} (${getYear(heritage.OpeningDate) ?? 's.d.'})`,
          );

        return typology_titles.map((title) => ({
          from: typology.id,
          to: title,
        }));
      })
      .reduce((r, l) => {
        Array.prototype.push.apply(r, l);
        return r;
      }, []),
  );

  const options: Highcharts.Options = {
    chart: {
      height: height - insets.top - headerHeight - 68 - 24 - 50,
      width: width - 24,
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
        type: 'networkgraph',
        accessibility: {
          enabled: true,
        },
        dataLabels: {
          enabled: true,
          //linkFormat: '',
          color: '#000000',
          allowOverlap: false,
        },
        data,
        nodes,
      },
    ],
  };

  return (
    <ScrollView style={style.container}>
      <Dropdown
        value={dropdownValue}
        setValue={setDropdown}
        items={names.map((name) => ({ label: name, value: name }))}
        zIndex={3}
      />
      <Chart options={options} />
    </ScrollView>
  );
}

export default HeritageAuthorTypologyNetwork;

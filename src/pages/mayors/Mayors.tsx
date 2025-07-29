import { JSX, useState } from 'react';

import { useHeaderHeight } from '@react-navigation/elements';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Chart, Dropdown } from '@base-components';
import { mayors } from '@data';
import { Heritage } from '@domain';
import { getYear, reduceListOfList, useTheme } from '@utils';

import styles from './styles';
function Block({ heritages, terms }: { heritages: Heritage[]; terms: string[] }): JSX.Element {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const selectedMayors = mayors.filter((mayor) => {
    const termsIntern = mayor.Terms?.filter((term) =>
      terms.includes(`${mayor.Person?.Name ?? 'Desconhecida'} (${getYear(term.StartDate)} - ${getYear(term.EndDate)})`),
    );
    return termsIntern != null && termsIntern.length > 0;
  });

  const selectedTermsYears: number[] = [];
  selectedMayors.forEach((mayor) => {
    const selectedTerms = mayor.Terms?.filter((term) =>
      terms.includes(`${mayor.Person?.Name ?? 'Desconhecida'} (${getYear(term.StartDate)} - ${getYear(term.EndDate)})`),
    );

    selectedTerms?.forEach((term) => {
      const startYear = getYear(term?.StartDate);
      const endYear = getYear(term?.EndDate);

      for (let i = startYear as number; i <= (endYear as number); i++) {
        selectedTermsYears.push(i);
      }
    });
  });
  const selectedYears = selectedTermsYears
    .sort((a, b) => (a > b ? 1 : -1))
    .reduce<number[]>((result, selectedYear, index) => {
      if (
        index === 0 ||
        index === selectedTermsYears.length - 1 ||
        selectedTermsYears[index + 1] === selectedYear + 1
      ) {
        result.push(selectedYear);
      } else {
        for (let i = selectedYear; i < selectedTermsYears[index + 1]; i++) {
          result.push(i);
        }
      }
      return result;
    }, []);

  const heritagePerYear = heritages
    .reduce<{ year: number; heritages: Heritage[] }[]>((result, heritage) => {
      const year = getYear(heritage.OpeningDate);
      if (year != null && selectedYears.includes(year)) {
        const y = result.find((t) => t.year === year);

        if (y == null) {
          result.push({
            year,
            heritages: heritages
              .filter((_heritage) => getYear(_heritage.OpeningDate) === year)
              .map((_heritage) => _heritage),
          });
        }
      }

      return result;
    }, [])
    .sort((a, b) => (a.year > b.year ? 1 : -1));

  const totalMayors = selectedMayors.reduce<{ type: string; name: string; data: (number | null)[]; color?: string }[]>(
    (series, mayor, index) => {
      const selectedTerms = mayor.Terms?.filter((term) =>
        terms.includes(
          `${mayor.Person?.Name ?? 'Desconhecida'} (${getYear(term.StartDate)} - ${getYear(term.EndDate)})`,
        ),
      );

      const mayorTotal: (number | null)[] = [];

      selectedYears.forEach((selectedYear) => {
        let foundYear = false;
        selectedTerms?.forEach((term) => {
          const startYear = getYear(term?.StartDate);
          const endYear = getYear(term?.EndDate);

          if ((startYear ?? 0) <= selectedYear && (endYear ?? 0) >= selectedYear) {
            const yearHeritages = heritagePerYear.filter((yearHeritages) => {
              return yearHeritages.year === selectedYear;
            });
            mayorTotal.push(yearHeritages.length > 0 ? yearHeritages[0].heritages.length : null);
            foundYear = true;
          }
        });

        if (!foundYear) {
          mayorTotal.push(null);
        }
      });

      series.push({
        type: 'column',
        name: mayor.Person?.Name ?? 'Desconhecida',
        data: mayorTotal,
        color: theme.coresGrafico[index],
      });

      return series;
    },
    [],
  ) as SeriesOptionsType[];

  const lineOptions: Highcharts.Options = {
    chart: {
      height: height - insets.top - headerHeight - 24 - 50,
      width: width - 24,
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
      categories: selectedYears.map((year) => year.toString()),
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
    series: totalMayors,
  };

  return <Chart options={lineOptions} />;
}

function Mayors({ heritages }: { heritages: Heritage[] }): JSX.Element {
  const style = styles();

  const items = mayors
    .sort((a, b) => {
      const aFirstTerm = a.Terms?.sort((aM, bM) =>
        (getYear(aM.StartDate) ?? 0) < (getYear(bM.StartDate) ?? 0) ? 1 : -1,
      )[0];
      const bFirstTerm = b.Terms?.sort((aM, bM) =>
        (getYear(aM.StartDate) ?? 0) < (getYear(bM.StartDate) ?? 0) ? 1 : -1,
      )[0];

      return (getYear(aFirstTerm?.StartDate) ?? 0) < (getYear(bFirstTerm?.StartDate) ?? 0) ? 1 : -1;
    })
    .map((mayor) => {
      const terms = mayor.Terms?.sort((aM, bM) =>
        (getYear(aM.StartDate) ?? 0) > (getYear(bM.StartDate) ?? 0) ? 1 : -1,
      ).map((term) => ({
        label: `${term.StartDate} - ${term.EndDate}`,
        value: `${mayor.Person?.Name ?? 'Desconhecida'} (${getYear(term.StartDate)} - ${getYear(term.EndDate)})`,
        parent: mayor.Person?.Name ?? 'Desconhecida',
      }));

      return [
        {
          label: mayor.Person?.Name ?? 'Desconhecida',
          value: mayor.Person?.Name ?? 'Desconhecida',
          selectable: false,
        },
        ...(terms ?? []),
      ];
    })
    .reduce(reduceListOfList);

  const [dropdownValue, setDropdown] = useState([
    'Cesar Epitácio Maia (1993 - 1996)',
    'Luiz Paulo Fernandez Conde (1997 - 2000)',
    'Marcelo Nunes de Allencar (1989 - 1992)',
  ]);

  return (
    <ScrollView style={style.container}>
      <Dropdown value={dropdownValue} setValue={setDropdown} items={items} multiple />
      <View>
        <Block heritages={heritages} terms={dropdownValue} />
      </View>
    </ScrollView>
  );
}

export default Mayors;

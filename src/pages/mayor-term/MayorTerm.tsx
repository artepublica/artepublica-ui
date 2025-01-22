import { useEffect, useState } from 'react';

import { useHeaderHeight } from '@react-navigation/elements';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Chart, Dropdown } from '@base-components';
import { Author, Mayor, Obra } from '@domain';
import { reduceListOfList, TipologiaTheme, useTheme } from '@utils';
import { getYear } from '@utils/analysis/analysis_utils';
import * as mayorsTerms from '@utils/data/mayors'; //TODO: use or create analysis to type
import { magenta } from '@utils/theme-provider/themes/cores';

function Block({
  heritages,
  years,
}: {
  heritages: Obra[];
  years: number[];
}): JSX.Element {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const heritagePerYear = heritages
    .reduce<{ year: number; heritages: Obra[] }[]>((result, heritage) => {
      const year = getYear(heritage.DataInauguracao);
      if (year != null && years.includes(year)) {
        const y = result.find((t) => t.year === year);

        if (y == null) {
          result.push({
            year,
            heritages: heritages
              .filter(
                (heritageInt) => getYear(heritageInt.DataInauguracao) === year,
              )
              .map((heritageInt) => heritageInt),
          });
        }
      }

      return result;
    }, [])
    .sort((a, b) => (a.year > b.year ? 1 : -1));

  const typologies = heritagePerYear
    .map((year) =>
      year.heritages.map((heritage) => heritage.Tipologia ?? 'Desconhecida'),
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

  const typologyTotal = typologies.reduce<
    { type: string; name: string; data: (number | null)[] }[]
  >((series, tipologia) => {
    const total_tipologia = heritagePerYear.map((year) => {
      const total = year.heritages.filter(
        (heritage) => heritage.Tipologia === tipologia,
      ).length;
      return total > 0 ? total : null;
    });

    const serie = {
      type: 'column',
      name: tipologia,
      data: total_tipologia,
      color:
        theme.tipologia[tipologia.toLowerCase() as keyof TipologiaTheme] ??
        theme.tipologia.desconhecida,
    };
    series.push(serie);
    return series;
  }, []) as SeriesOptionsType[];

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
      categories: years.map((ano) => ano.toString()),
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
    series: typologyTotal,
  };

  return <Chart options={lineOptions} />;
}

function Network({
  heritages,
  years,
  mayor,
}: {
  heritages: Obra[];
  mayor: string;
  years: number[];
}): JSX.Element {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const termHeritages = heritages.reduce<Obra[]>((result, heritage) => {
    const year = getYear(heritage.DataInauguracao);
    if (year != null && years.includes(year)) {
      result.push(heritage);
    }

    return result;
  }, []);

  const authors = termHeritages
    .map(
      (heritage) =>
        heritage.Authors ?? [{ Person: { Name: 'Desconhecida' } } as Author],
    )
    .reduce<string[]>((r, l) => {
      Array.prototype.push.apply(
        r,
        l.map<string>((author) => author.Person?.Name ?? 'Desconhecida'),
      );
      return r;
    }, [])
    .reduce<{ id: string; marker: { radius: number }; color: string }[]>(
      (r, author) => {
        if (r.find((node) => node.id === author) == null) {
          r.push({
            id: author ?? 'Deconhecida',
            marker: { radius: 10 },
            color: '',
          });
        }
        return r;
      },
      [],
    )
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((a, index) => ({ ...a, color: theme.coresGrafico[index + 1] }));

  const titles = termHeritages.map((heritage) => ({
    id: heritage.Titulo ?? 'Deconhecida',
    marker: { radius: 5 },
    color: `${authors.filter((author) => heritage.Authors?.map((_author) => _author.Person?.Name).includes(author.id))[0].color}80`,
  }));

  const nodes = [{ id: mayor, marker: { radius: 15 }, color: magenta }];
  Array.prototype.push.apply(nodes, titles);
  Array.prototype.push.apply(nodes, authors);

  const data = authors.map((author) => ({
    from: mayor,
    to: author.id,
  }));

  Array.prototype.push.apply(
    data,
    authors
      .map((author) => {
        const authorTitles = termHeritages
          .filter(
            (heritage) =>
              (heritage.Authors != null &&
                heritage.Authors?.find(
                  (_author) => _author.Person?.Name === author.id,
                ) != null) ||
              (author.id === 'Desconhecida' && heritage.Authors == null),
          )
          .map((heritage) => heritage.Titulo);

        return authorTitles.map((title) => ({
          from: author.id,
          to: title,
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
      height: height - insets.top - headerHeight - 24 - 50,
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

function Sankey({
  heritages,
  years,
  mayor,
}: {
  heritages: Obra[];
  mayor: string;
  years: number[];
}): JSX.Element {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const termHeritages = heritages.reduce<Obra[]>((result, heritage) => {
    const year = getYear(heritage.DataInauguracao);
    if (year != null && years.includes(year)) {
      result.push(heritage);
    }

    return result;
  }, []);
  const authors = termHeritages
    .map(
      (heritage) =>
        heritage.Authors ?? [{ Person: { Nome: 'Desconhecida' } } as Author],
    )
    .reduce<string[]>((r, l) => {
      Array.prototype.push.apply(
        r,
        l.map<string>((author) => author.Person?.Name ?? 'Desconhecida'),
      );
      return r;
    }, [])
    .reduce<{ id: string; marker: { radius: number }; color: string }[]>(
      (r, author) => {
        if (r.find((node) => node.id === author) == null) {
          r.push({
            id: author ?? 'Deconhecida',
            marker: { radius: 30 },
            color: '',
          });
        }
        return r;
      },
      [],
    )
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((a, index) => ({ ...a, color: theme.coresGrafico[index + 1] }));

  const titles = termHeritages.map((heritage) => ({
    id: heritage.Titulo ?? 'Deconhecida',
    marker: { radius: 15 },
    color: `${authors.filter((author) => heritage.Authors?.map((_author) => _author.Person?.Name).includes(author.id))[0].color}80`,
  }));

  const nodes = [{ id: mayor, marker: { radius: 50 }, color: magenta }];
  Array.prototype.push.apply(nodes, titles);
  Array.prototype.push.apply(nodes, authors);

  const data = authors.map((author) => ({
    from: mayor,
    to: author.id,
    weight: 1,
  }));

  Array.prototype.push.apply(
    data,
    authors
      .map((author) => {
        const authorTitles = termHeritages
          .filter(
            (heritage) =>
              (heritage.Authors != null &&
                heritage.Authors?.find(
                  (_author) => _author.Person?.Name === author.id,
                ) != null) ||
              (author.id === 'Desconhecida' && heritage.Authors == null),
          )
          .map((heritage) => heritage.Titulo);

        return authorTitles.map((title) => ({
          from: author.id,
          to: title,
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
      height: height - insets.top - headerHeight - 24 - 50,
      width: width - 24,
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
          style: {
            fontSize: 10,
          },
        },
        data,
        nodes,
      },
    ],
  };

  return <Chart options={networkOptions as Highcharts.Options} />;
}

function MayorTerm({ heritages }: { heritages: Obra[] }): JSX.Element {
  const typedMayors: Record<string, Mayor> = mayorsTerms;

  const items = Object.keys(typedMayors)
    .map((key) => typedMayors[key])
    .sort((a, b) => {
      const aFirstTerm = a.Terms?.sort((aM, bM) =>
        (getYear(aM.DataInicio) ?? 0) < (getYear(bM.DataInicio) ?? 0) ? 1 : -1,
      )[0];
      const bFirstTerm = b.Terms?.sort((aM, bM) =>
        (getYear(aM.DataInicio) ?? 0) < (getYear(bM.DataInicio) ?? 0) ? 1 : -1,
      )[0];

      return (getYear(aFirstTerm?.DataInicio) ?? 0) <
        (getYear(bFirstTerm?.DataInicio) ?? 0)
        ? 1
        : -1;
    })
    .map((mayor) => {
      const terms = mayor.Terms?.sort((aM, bM) =>
        (getYear(aM.DataInicio) ?? 0) > (getYear(bM.DataInicio) ?? 0) ? 1 : -1,
      ).map((term) => ({
        label: `${term.DataInicio} - ${term.DataFim}`,
        value: `${mayor.Person?.Name ?? 'Desconhecida'} (${getYear(term.DataInicio)} - ${getYear(term.DataFim)})`,
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

  const [dropdownValue, setDropdown] = useState(
    'Cesar Epitácio Maia (1993 - 1996)',
  );

  const mayors = Object.keys(typedMayors).map((key) => typedMayors[key]);

  const [years, setYears] = useState<{ mayor: string; years: number[] }>({
    mayor: '',
    years: [],
  });

  useEffect(() => {
    const mayor = mayors.filter((mayor) => {
      const terms = mayor.Terms?.filter(
        (term) =>
          `${mayor.Person?.Name ?? 'Desconhecida'} (${getYear(term.DataInicio)} - ${getYear(term.DataFim)})` ===
          dropdownValue,
      );
      return terms != null && terms.length > 0;
    })[0];

    const term = mayor.Terms?.filter(
      (term) =>
        `${mayor.Person?.Name ?? 'Desconhecida'} (${getYear(term.DataInicio)} - ${getYear(term.DataFim)})` ===
        dropdownValue,
    )[0];

    const anoInicio = getYear(term?.DataInicio);
    const anoFim = getYear(term?.DataFim);

    const anosIntern: number[] = [];
    for (let i = anoInicio as number; i <= (anoFim as number); i++) {
      anosIntern.push(i);
    }
    setYears({
      mayor: mayor.Person?.Name ?? 'Desconhecida',
      years: anosIntern,
    });
  }, [dropdownValue]);

  return (
    <ScrollView
      style={{ width: '100%', paddingTop: 12, paddingHorizontal: 12 }}
    >
      <Dropdown value={dropdownValue} setValue={setDropdown} items={items} />
      <View>
        <Block heritages={heritages} years={years.years} />
      </View>
      <View style={{ paddingTop: 12 }}>
        <Network
          heritages={heritages}
          years={years.years}
          mayor={years.mayor}
        />
      </View>
      <View style={{ paddingTop: 12 }}>
        <Sankey heritages={heritages} years={years.years} mayor={years.mayor} />
      </View>
    </ScrollView>
  );
}

export default MayorTerm;

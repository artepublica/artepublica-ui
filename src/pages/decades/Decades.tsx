import { useState } from 'react';

import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

import { Table, Text } from '@base-components';
import { Author, Heritage } from '@domain';
import { useTheme } from '@utils';

import * as heritagePerDecade from './heritagePerDecade';

function Decades(): JSX.Element {
  const allYears: { label: string; value: string }[] = [
    { label: 'Desconhecida', value: 'Null' },
  ];
  for (let year = 2020; year > 1500; year = year - 10) {
    allYears.push({ label: year.toString(), value: year.toString() });
  }

  const [open, setOpen] = useState(false);
  const [year, setValue] = useState('1990');
  const [items, setItems] = useState(allYears);
  const { theme } = useTheme();

  const typed_analysis_list_utils: Record<string, Heritage[]> =
    heritagePerDecade;

  const selectedDecadeHeritages = typed_analysis_list_utils[`all${year}`];

  if (selectedDecadeHeritages.length > 0) {
    const selectedDecadeTypologies: string[] = selectedDecadeHeritages.map(
      (heritage) => heritage.Typology ?? 'Desconhecida',
    );
    const selectedDecadeNatures: string[] = selectedDecadeHeritages.map(
      (heritage) => heritage.Nature ?? 'Desconhecida',
    );
    const selectedDecadeAreas: string[] = selectedDecadeHeritages.map(
      (heritage) => heritage.Area ?? 'Desconhecida',
    );
    const selectedDecadeStatus: string[] = selectedDecadeHeritages.map(
      (heritage) => heritage.Status ?? 'Desconhecida',
    );
    const selectedDecadeAuthors: string[] = selectedDecadeHeritages
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
      }, []);

    const selectedDecadeTypologyTotal: {
      name: string;
      heritages: Heritage[];
    }[] = selectedDecadeTypologies
      .reduce<{ name: string; heritages: Heritage[] }[]>(function (r, a) {
        const r_top = r.find((top) => top.name === a);
        if (!r_top) {
          r.push({
            name: a,
            heritages: selectedDecadeHeritages.filter(
              (heritage) =>
                heritage.Typology === a ||
                (heritage.Typology == null && a === 'Desconhecida'),
            ),
          });
        }
        return r;
      }, [])
      .sort((a, b) => a.name.localeCompare(b.name));

    const selectedDecadeNatureTotal: { name: string; total: number }[] =
      selectedDecadeNatures
        .reduce<{ name: string; total: number }[]>(function (r, a) {
          const r_top = r.find((top) => top.name === a);
          if (!r_top) {
            r.push({
              name: a,
              total: selectedDecadeNatures.filter((top) => top === a).length,
            });
          }
          return r;
        }, [])
        .sort((a, b) => a.name.localeCompare(b.name));

    const selectedDecadeAreaTotal: { name: string; total: number }[] =
      selectedDecadeAreas
        .reduce<{ name: string; total: number }[]>(function (r, a) {
          const r_top = r.find((top) => top.name === a);
          if (!r_top) {
            r.push({
              name: a,
              total: selectedDecadeAreas.filter((top) => top === a).length,
            });
          }
          return r;
        }, [])
        .sort((a, b) => a.name.localeCompare(b.name));

    const selectedDecadeStatusTotal: {
      name: string;
      total: number;
      typologies: { name: string; total: number }[];
    }[] = selectedDecadeStatus
      .reduce<
        {
          name: string;
          total: number;
          typologies: { name: string; total: number }[];
        }[]
      >(function (r, a) {
        const r_top = r.find((top) => top.name === a);
        if (!r_top) {
          const typologies = selectedDecadeHeritages
            .filter(
              (heritage) =>
                heritage.Status === a ||
                (a === 'Desconhecida' && heritage.Status == null),
            )
            .map((heritage) => heritage.Typology ?? 'Desconhecida');

          const typologyTotal: { name: string; total: number }[] = typologies
            .reduce<{ name: string; total: number }[]>(function (r, a) {
              const r_top = r.find((top) => top.name === a);
              if (!r_top) {
                r.push({
                  name: a,
                  total: typologies.filter((top) => top === a).length,
                });
              }
              return r;
            }, [])
            .sort((a, b) => a.name.localeCompare(b.name));

          r.push({
            name: a,
            total: selectedDecadeStatus.filter((top) => top === a).length,
            typologies: typologyTotal,
          });
        }
        return r;
      }, [])
      .sort((a, b) => a.name.localeCompare(b.name));

    const selectedDecadeAuthorTotal: {
      name: string;
      total: number;
      heritages: string[];
    }[] = selectedDecadeAuthors
      .reduce<{ name: string; total: number; heritages: string[] }[]>(function (
        r,
        a,
      ) {
        const r_top = r.find((top) => top.name === a);
        if (!r_top) {
          const heritages: string[] = selectedDecadeHeritages
            .filter(
              (heritage) =>
                (heritage.Authors != null &&
                  heritage.Authors?.find(
                    (author) => author.Person?.Name === a,
                  ) != null) ||
                (a === 'Desconhecida' && heritage.Authors == null),
            )
            .map((heritage) => heritage.Title ?? 'Desconhecida');

          r.push({
            name: a,
            total: heritages.length,
            heritages,
          });
        }
        return r;
      }, [])
      .sort((a, b) => a.name.localeCompare(b.name));

    return (
      <ScrollView
        style={{ width: '100%', paddingTop: 12, paddingHorizontal: 12 }}
      >
        <DropDownPicker
          theme={theme.dark ? 'DARK' : 'LIGHT'}
          open={open}
          value={year}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode='SCROLLVIEW'
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

        <Text>
          {year}: {selectedDecadeHeritages.length}
        </Text>
        <View style={{ height: 12 }} />

        <Table
          headers={[
            'Tipologia',
            `Total: ${selectedDecadeTypologyTotal.length}`,
            'Obras',
          ]}
          rows={selectedDecadeTypologyTotal.map((top) => [
            top.name,
            top.heritages.length.toString(),
            top.heritages
              .map((heritage) => heritage.Title ?? 'Desconhecida')
              .join(', '),
          ])}
        />
        <View style={{ height: 12 }} />

        <Table
          headers={['Natureza', `Total: ${selectedDecadeNatureTotal.length}`]}
          rows={selectedDecadeNatureTotal.map((top) => [
            top.name,
            top.total.toString(),
          ])}
        />
        <View style={{ height: 12 }} />

        <Table
          headers={['Area', `Total: ${selectedDecadeAreaTotal.length}`]}
          rows={selectedDecadeAreaTotal.map((top) => [
            top.name,
            top.total.toString(),
          ])}
        />
        <View style={{ height: 12 }} />

        <Table
          headers={[
            'Status',
            `Total: ${selectedDecadeStatusTotal.length}`,
            'Tipologias',
          ]}
          rows={selectedDecadeStatusTotal.map((top) => [
            top.name,
            top.total.toString(),
            top.typologies
              .map((top) => `${top.name} (${top.total})`)
              .join(', '),
          ])}
        />
        <View style={{ height: 12 }} />

        <Table
          headers={[
            'Artista',
            `Total: ${selectedDecadeAuthorTotal.length}`,
            'Obras',
          ]}
          rows={selectedDecadeAuthorTotal.map((top) => [
            top.name,
            top.total.toString(),
            top.heritages.join(', '),
          ])}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{ width: '100%', paddingTop: 12, paddingHorizontal: 12 }}
    >
      <DropDownPicker
        theme={theme.dark ? 'DARK' : 'LIGHT'}
        open={open}
        value={year}
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
      <View style={{ height: 12 }} />
      <Text>Sem dados sobre o período</Text>
    </ScrollView>
  );
}

export default Decades;

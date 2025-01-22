import { useState } from 'react';

import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

import { Table, Text } from '@base-components';
import { Author, Obra } from '@domain';
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

  const typed_analysis_list_utils: Record<string, Obra[]> = heritagePerDecade;

  const selectedDecadeHeritages = typed_analysis_list_utils[`all${year}`];

  if (selectedDecadeHeritages.length > 0) {
    const selectedDecadeTypologies: string[] = selectedDecadeHeritages.map(
      (obra) => obra.Typology ?? 'Desconhecida',
    );
    const selectedDecadeNatures: string[] = selectedDecadeHeritages.map(
      (obra) => obra.Natureza ?? 'Desconhecida',
    );
    const selectedDecadeZones: string[] = selectedDecadeHeritages.map(
      (obra) => obra.Zona ?? 'Desconhecida',
    );
    const selectedDecadeStatus: string[] = selectedDecadeHeritages.map(
      (obra) => obra.Status ?? 'Desconhecida',
    );
    const selectedDecadeAuthors: string[] = selectedDecadeHeritages
      .map(
        (obra) =>
          obra.Authors ?? [{ Person: { Name: 'Desconhecida' } } as Author],
      )
      .reduce<string[]>((r, l) => {
        Array.prototype.push.apply(
          r,
          l.map<string>((author) => author.Person?.Name ?? 'Desconhecida'),
        );
        return r;
      }, []);

    const selectedDecadeTypologyTotal: { nome: string; obras: Obra[] }[] =
      selectedDecadeTypologies
        .reduce<{ nome: string; obras: Obra[] }[]>(function (r, a) {
          const r_top = r.find((top) => top.nome === a);
          if (!r_top) {
            r.push({
              nome: a,
              obras: selectedDecadeHeritages.filter(
                (obra) =>
                  obra.Typology === a ||
                  (obra.Typology == null && a === 'Desconhecida'),
              ),
            });
          }
          return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const selectedDecadeNatureTotal: { nome: string; total: number }[] =
      selectedDecadeNatures
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
          const r_top = r.find((top) => top.nome === a);
          if (!r_top) {
            r.push({
              nome: a,
              total: selectedDecadeNatures.filter((top) => top === a).length,
            });
          }
          return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const selectedDecadeZoneTotal: { nome: string; total: number }[] =
      selectedDecadeZones
        .reduce<{ nome: string; total: number }[]>(function (r, a) {
          const r_top = r.find((top) => top.nome === a);
          if (!r_top) {
            r.push({
              nome: a,
              total: selectedDecadeZones.filter((top) => top === a).length,
            });
          }
          return r;
        }, [])
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const selectedDecadeStatusTotal: {
      nome: string;
      total: number;
      typologies: { nome: string; total: number }[];
    }[] = selectedDecadeStatus
      .reduce<
        {
          nome: string;
          total: number;
          typologies: { nome: string; total: number }[];
        }[]
      >(function (r, a) {
        const r_top = r.find((top) => top.nome === a);
        if (!r_top) {
          const typologies = selectedDecadeHeritages
            .filter(
              (obra) =>
                obra.Status === a ||
                (a === 'Desconhecida' && obra.Status == null),
            )
            .map((obra) => obra.Typology ?? 'Desconhecida');

          const typologyTotal: { nome: string; total: number }[] = typologies
            .reduce<{ nome: string; total: number }[]>(function (r, a) {
              const r_top = r.find((top) => top.nome === a);
              if (!r_top) {
                r.push({
                  nome: a,
                  total: typologies.filter((top) => top === a).length,
                });
              }
              return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

          r.push({
            nome: a,
            total: selectedDecadeStatus.filter((top) => top === a).length,
            typologies: typologyTotal,
          });
        }
        return r;
      }, [])
      .sort((a, b) => a.nome.localeCompare(b.nome));

    const selectedDecadeAuthorTotal: {
      nome: string;
      total: number;
      obras: string[];
    }[] = selectedDecadeAuthors
      .reduce<{ nome: string; total: number; obras: string[] }[]>(function (
        r,
        a,
      ) {
        const r_top = r.find((top) => top.nome === a);
        if (!r_top) {
          const obras: string[] = selectedDecadeHeritages
            .filter(
              (obra) =>
                (obra.Authors != null &&
                  obra.Authors?.find((author) => author.Person?.Name === a) !=
                    null) ||
                (a === 'Desconhecida' && obra.Authors == null),
            )
            .map((obra) => obra.Titulo ?? 'Desconhecida');

          r.push({
            nome: a,
            total: obras.length,
            obras,
          });
        }
        return r;
      }, [])
      .sort((a, b) => a.nome.localeCompare(b.nome));

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
            top.nome,
            top.obras.length.toString(),
            top.obras.map((obra) => obra.Titulo ?? 'Desconhecida').join(', '),
          ])}
        />
        <View style={{ height: 12 }} />

        <Table
          headers={['Natureza', `Total: ${selectedDecadeNatureTotal.length}`]}
          rows={selectedDecadeNatureTotal.map((top) => [
            top.nome,
            top.total.toString(),
          ])}
        />
        <View style={{ height: 12 }} />

        <Table
          headers={['Zona', `Total: ${selectedDecadeZoneTotal.length}`]}
          rows={selectedDecadeZoneTotal.map((top) => [
            top.nome,
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
            top.nome,
            top.total.toString(),
            top.typologies
              .map((top) => `${top.nome} (${top.total})`)
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
            top.nome,
            top.total.toString(),
            top.obras.join(', '),
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

import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Table, Text } from '@base-components';
import { Artista, Obra } from '@domain';
import { useTheme } from '@utils';
import * as analisys_list_utils from '@utils/data/analisys_list_utils';

function Decade(): JSX.Element | null {
    const { theme } = useTheme();

    const allYears: { label: string; value: string }[] = [{ label: 'Desconhecida', value: 'Null' }];
    for (let year = 2020; year > 1500; year = year - 10) {
        allYears.push({ label: year.toString(), value: year.toString() });
    }

    const [
        open,
        setOpen,
    ] = useState(false);
    const [
        year,
        setValue,
    ] = useState('1990');
    const [
        items,
        setItems,
    ] = useState(allYears);

    const typed_analisys_list_utils: Record<string, Obra[]> = analisys_list_utils;

    const style = styles();

    const obras_decada: Obra[] = typed_analisys_list_utils[`all${year}`];

    if (obras_decada.length > 0) {
        const tipologias_obras_decada: string[] = obras_decada.map((obra) => obra.Tipologia ?? 'Desconhecida');
        const naturezas_obras_decada: string[] = obras_decada.map((obra) => obra.Natureza ?? 'Desconhecida');
        const zonas_obras_decada: string[] = obras_decada.map((obra) => obra.Zona ?? 'Desconhecida');
        const status_obras_decada: string[] = obras_decada.map((obra) => obra.Status ?? 'Desconhecida');
        const autores_obras_decada: string[] = obras_decada
            .map(
                (obra) =>
                    obra.Autores ?? [
                        { Pessoa: { Nome: 'Desconhecida' } } as Artista,
                    ],
            )
            .reduce<string[]>((r, l) => {
                Array.prototype.push.apply(
                    r,
                    l.map<string>((artista) => artista.Pessoa?.Nome ?? 'Desconhecida'),
                );
                return r;
            }, []);

        const tipologias_obras_decada_total: { nome: string; obras: Obra[] }[] = tipologias_obras_decada
            .reduce<{ nome: string; obras: Obra[] }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    r.push({
                        nome: a,
                        obras: obras_decada.filter((obra) => obra.Tipologia === a || (obra.Tipologia == null && a === 'Desconhecida')),
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        const naturezas_obras_decada_total: { nome: string; total: number }[] = naturezas_obras_decada
            .reduce<{ nome: string; total: number }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    r.push({
                        nome: a,
                        total: naturezas_obras_decada.filter((top) => top === a).length,
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        const zonas_obras_decada_total: { nome: string; total: number }[] = zonas_obras_decada
            .reduce<{ nome: string; total: number }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    r.push({
                        nome: a,
                        total: zonas_obras_decada.filter((top) => top === a).length,
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        const status_obras_decada_total: {
            nome: string;
            total: number;
            tipologias: { nome: string; total: number }[];
        }[] = status_obras_decada
            .reduce<
                {
                    nome: string;
                    total: number;
                    tipologias: { nome: string; total: number }[];
                }[]
            >(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    const tipologias = obras_decada
                        .filter((obra) => obra.Status === a || (a === 'Desconhecida' && obra.Status == null))
                        .map((obra) => obra.Tipologia ?? 'Desconhecida');

                    const tipologias_total: { nome: string; total: number }[] = tipologias
                        .reduce<{ nome: string; total: number }[]>(function (r, a) {
                            const r_top = r.find((top) => top.nome === a);
                            if (!r_top) {
                                r.push({
                                    nome: a,
                                    total: tipologias.filter((top) => top === a).length,
                                });
                            }
                            return r;
                        }, [])
                        .sort((a, b) => a.nome.localeCompare(b.nome));

                    r.push({
                        nome: a,
                        total: status_obras_decada.filter((top) => top === a).length,
                        tipologias: tipologias_total,
                    });
                }
                return r;
            }, [])
            .sort((a, b) => a.nome.localeCompare(b.nome));

        const artistas_total_obras: {
            nome: string;
            total: number;
            obras: string[];
        }[] = autores_obras_decada
            .reduce<{ nome: string; total: number; obras: string[] }[]>(function (r, a) {
                const r_top = r.find((top) => top.nome === a);
                if (!r_top) {
                    const obras: string[] = obras_decada
                        .filter(
                            (obra) =>
                                (obra.Autores != null && obra.Autores?.find((artista) => artista.Pessoa?.Nome === a) != null) ||
                                (a === 'Desconhecida' && obra.Autores == null),
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
            <SafeAreaView style={style.container}>
                <ScrollView style={{ width: '100%' }}>
                    <DropDownPicker
                        theme={theme.dark ? 'DARK' : 'LIGHT'}
                        open={open}
                        value={year}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listMode="SCROLLVIEW"
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
                    <View style={{ height: 24 }} />

                    <Text>
                        {year}: {obras_decada.length}
                    </Text>
                    <View style={{ height: 24 }} />

                    <Table
                        headers={[
                            'Tipologia',
                            `Total: ${tipologias_obras_decada_total.length}`,
                            'Obras',
                        ]}
                        rows={tipologias_obras_decada_total.map((top) => [
                            top.nome,
                            top.obras.length.toString(),
                            top.obras.map((obra) => obra.Titulo ?? 'Desconhecida').join(', '),
                        ])}
                    />
                    <View style={{ height: 24 }} />

                    <Table
                        headers={[
                            'Natureza',
                            `Total: ${naturezas_obras_decada_total.length}`,
                        ]}
                        rows={naturezas_obras_decada_total.map((top) => [
                            top.nome,
                            top.total.toString(),
                        ])}
                    />
                    <View style={{ height: 24 }} />

                    <Table
                        headers={[
                            'Zona',
                            `Total: ${zonas_obras_decada_total.length}`,
                        ]}
                        rows={zonas_obras_decada_total.map((top) => [
                            top.nome,
                            top.total.toString(),
                        ])}
                    />
                    <View style={{ height: 24 }} />

                    <Table
                        headers={[
                            'Status',
                            `Total: ${status_obras_decada_total.length}`,
                            'Tipologias',
                        ]}
                        rows={status_obras_decada_total.map((top) => [
                            top.nome,
                            top.total.toString(),
                            top.tipologias.map((top) => `${top.nome} (${top.total})`).join(', '),
                        ])}
                    />
                    <View style={{ height: 24 }} />

                    <Table
                        headers={[
                            'Artista',
                            `Total: ${artistas_total_obras.length}`,
                            'Obras',
                        ]}
                        rows={artistas_total_obras.map((top) => [
                            top.nome,
                            top.total.toString(),
                            top.obras.join(', '),
                        ])}
                    />
                    <View style={{ height: 24 }} />
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView>
            <DropDownPicker
                theme={theme.dark ? 'DARK' : 'LIGHT'}
                open={open}
                value={year}
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
            <View style={{ height: 24 }} />
            <Text>Sem dados sobre o período</Text>
        </SafeAreaView>
    );
}

function styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        head: { height: 40 },
    });
}

export default Decade;

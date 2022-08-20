import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Chart } from '@base-components';
import { Artista, Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function MaiorAutor(obra_artepublica: Record<string, Obra>): string | undefined {
    const artistas_artepublica = Object.keys(obra_artepublica)
        .map(
            (key) =>
                obra_artepublica[key].Autores ?? [
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

    const artistas_total_obras = artistas_artepublica.reduce<{ nome: string; total: number; obras: { nome: string; inauguracao: string }[] }[]>(function (
        r,
        a,
    ) {
        const r_top = r.find((top) => top.nome === a);
        if (!r_top) {
            const obras: { nome: string; inauguracao: string }[] = Object.keys(obra_artepublica)
                .filter(
                    (key) =>
                        (obra_artepublica[key].Autores != null && obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === a) != null) ||
                        (a === 'Desconhecida' && obra_artepublica[key].Autores == null),
                )
                .map((key) => ({
                    nome: obra_artepublica[key].Titulo ?? 'Desconhecida',
                    inauguracao: obra_artepublica[key].DataInauguracao ?? 'Desconhecida',
                }));

            r.push({
                nome: a,
                total: obras.length,
                obras,
            });
        }
        return r;
    },
    []);

    let artistas_total = [...artistas_total_obras];
    artistas_total = artistas_total.sort((a, b) => a.nome.localeCompare(b.nome));

    let artistas_total_sort_total = [...artistas_total];
    artistas_total_sort_total = artistas_total_sort_total.sort((a, b) => (a.total < b.total ? 1 : -1));

    let artista: string | undefined;
    if (artistas_total_sort_total.length > 0) {
        if (artistas_total_sort_total[0].nome !== 'Desconhecida') {
            artista = artistas_total_sort_total[0].nome;
        } else if (artistas_total_sort_total.length > 1) {
            if (artistas_total_sort_total[1].nome !== 'Desconhecida') {
                artista = artistas_total_sort_total[1].nome;
            }
        }
    }
    return artista;
}

function Network(): JSX.Element {
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;
    const autor = MaiorAutor(obra_artepublica);

    const obras: Obra[] = Object.keys(typed_obra_artepublica)
        .filter(
            (key) =>
                (typed_obra_artepublica[key].Autores != null &&
                    typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === autor) != null) ||
                (autor === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
        )
        .map((key) => typed_obra_artepublica[key]);

    const titulos = obras.map((obra) => ({
        id: `${obra.Titulo ?? 'Deconhecida'} (${getYear(obra.DataInauguracao) ?? 'S.D.'})`,
        marker: { radius: 5 },
        color: 'yellow',
    }));
    const tipologias = obras
        .map((obra) => ({
            id: obra.Tipologia ?? 'Deconhecida',
            marker: { radius: 10 },
            color: 'red',
        }))
        .reduce<{ id: string }[]>((r, e) => {
            if (r.find((tip) => tip.id === e.id) == null) {
                r.push(e);
            }
            return r;
        }, []);

    const nodes = [{ id: autor, marker: { radius: 20 }, color: 'blue' }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, tipologias);

    const data = tipologias.map((tipologia) => ({
        from: autor,
        to: tipologia.id,
    }));

    Array.prototype.push.apply(
        data,
        tipologias
            .map((tipologia) => {
                const titulos_tipologia = Object.keys(typed_obra_artepublica)
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Autores != null &&
                                typed_obra_artepublica[key].Autores?.find((artista) => artista.Pessoa?.Nome === autor) != null) ||
                            (autor === 'Desconhecida' && typed_obra_artepublica[key].Autores == null),
                    )
                    .filter(
                        (key) =>
                            (typed_obra_artepublica[key].Tipologia != null && typed_obra_artepublica[key].Tipologia === tipologia.id) ||
                            (tipologia.id === 'Desconhecida' && typed_obra_artepublica[key].Tipologia == null),
                    )
                    .map((key) => `${typed_obra_artepublica[key].Titulo ?? 'Deconhecida'} (${getYear(typed_obra_artepublica[key].DataInauguracao) ?? 'S.D.'})`);

                return titulos_tipologia.map((titulo) => ({
                    from: tipologia.id,
                    to: titulo,
                }));
            })
            .reduce((r, l) => {
                Array.prototype.push.apply(r, l);
                return r;
            }, []),
    );

    const networkOptions: Highcharts.Options | unknown = {
        chart: {
            height: 800,
            type: 'networkgraph',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    enableSimulation: true,
                    friction: -0.9,
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
                    linkFormat: '{point.rel}',
                },
                data,
                nodes,
            },
        ],
    };

    return <Chart options={networkOptions as Highcharts.Options} />;
}

function Home(): JSX.Element {
    const style = styles();

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Network />
                <View style={{ height: 24 }} />
            </ScrollView>
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

export default Home;

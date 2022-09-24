import { useEffect, useState } from 'react';

import { View } from 'react-native';

import { Button, Chart, Table } from '@base-components';
import { PoliticaPublica, Exposicao, TrocaCapital, ArtigoJornal, Livro } from '@domain';
import { amarelo3, azul, laranja, verde, vermelho2, vinho2 } from '@utils';
import converterTrocaParaDependencyWheel from '@utils/analises/capitais/converter-troca-para-dependency-wheel';
import getNodes from '@utils/analises/dependency-wheel/get-nodes';
import juntarDependencyWheel from '@utils/analises/dependency-wheel/juntar-dependency-wheel';
import agenteDaPolitica from '@utils/analises/politica-publica/agente-da-politica';
import autorObraDaPolitica from '@utils/analises/politica-publica/autor-obra-da-politica';
import politicaPublicaX from '@utils/analises/politica-publica/politica-publica-x';
import politicaPublicaXartigoJornal from '@utils/analises/politica-publica/politica-publica-x-artigo-jornal';
import politicaPublicaXexposicao from '@utils/analises/politica-publica/politica-publica-x-exposicao';
import politicaPublicaXlivro from '@utils/analises/politica-publica/politica-publica-x-livro';
import * as artigosjornal from '@utils/data/artigosjornal';
import * as exposicoes from '@utils/data/exposicoes';
import * as livros from '@utils/data/livros';
import reduceListOfList from '@utils/list/reduce-list-of-list';
import shuffleArray from '@utils/list/shuffleArray';

function getTrocasArtigosJornais(politicaPublica: PoliticaPublica): TrocaCapital[] {
    const typed_artigosjornal: Record<string, ArtigoJornal> = artigosjornal;

    return Object.keys(typed_artigosjornal)
        .map((key) => {
            const artigoJornal = typed_artigosjornal[key];

            return politicaPublicaXartigoJornal(politicaPublica, artigoJornal);
        })
        .reduce(reduceListOfList);
}

function getTrocasLivros(politicaPublica: PoliticaPublica): TrocaCapital[] {
    const typed_livros: Record<string, Livro> = livros;

    return Object.keys(typed_livros)
        .map((key) => {
            const livro = typed_livros[key];

            return politicaPublicaXlivro(politicaPublica, livro);
        })
        .reduce(reduceListOfList);
}

function getTrocasExposicoes(politicaPublica: PoliticaPublica): TrocaCapital[] {
    const typed_exposicoes: Record<string, Exposicao> = exposicoes;

    return Object.keys(typed_exposicoes)
        .map((key) => {
            const exposicao = typed_exposicoes[key];

            return politicaPublicaXexposicao(politicaPublica, exposicao);
        })
        .reduce(reduceListOfList);
}

function DependencyWheelRefactor({
    politicaPublica,
    peso,
    height,
    showLabel,
    labelEmCima,
}: {
    politicaPublica: PoliticaPublica;
    peso: number;
    height?: number;
    showLabel?: number;
    labelEmCima?: boolean;
}): JSX.Element {
    const trocasPoliticaPublica = politicaPublicaX();
    const trocasArtigosJornais = getTrocasArtigosJornais(politicaPublica);
    const trocasLivros = getTrocasLivros(politicaPublica);
    const trocasExposicoes = getTrocasExposicoes(politicaPublica);

    const dependencyWheelsPoliticaPublica = trocasPoliticaPublica.map((troca) => converterTrocaParaDependencyWheel(troca));
    const dependencyWheelsArtigosJornais = trocasArtigosJornais.map((troca) => converterTrocaParaDependencyWheel(troca));
    const dependencyWheelsLivros = trocasLivros.map((troca) => converterTrocaParaDependencyWheel(troca));
    const dependencyWheelsExposicoes = trocasExposicoes.map((troca) => converterTrocaParaDependencyWheel(troca));

    const dep1 = juntarDependencyWheel(dependencyWheelsPoliticaPublica, dependencyWheelsArtigosJornais);
    const dep2 = juntarDependencyWheel(dep1, dependencyWheelsLivros);
    const dependencyWheels = juntarDependencyWheel(dep2, dependencyWheelsExposicoes);

    const todosNodes = getNodes(dependencyWheels);
    const nosFiltrados = todosNodes.filter((no) => no.weight >= peso);

    function color(node: string): string | undefined {
        switch (node) {
            case 'Everardo Miranda':
                return vermelho2;
            case 'Reynaldo Roels':
                return vinho2;
            case 'Fernando Cocchiarale':
                return laranja;
            case 'Lauro Cavalcanti':
                return amarelo3;
            case 'Paulo Venancio Filho':
                return verde;
            case 'Ronaldo Brito':
                return azul;
            default:
                return undefined;
        }
    }

    const nosImportantes = nosFiltrados.map((no) => {
        const colorByPoint = agenteDaPolitica(politicaPublica, no.node);

        console.log(colorByPoint ? color(no.node) : undefined);

        return {
            id: no.node,
            dataLabels: {
                enabled:
                    showLabel === 0
                        ? false
                        : showLabel === 1
                        ? true
                        : agenteDaPolitica(politicaPublica, no.node) || autorObraDaPolitica(politicaPublica, no.node),
            },
            color: colorByPoint ? color(no.node) : undefined,
        };
    });

    const dataFiltrada = dependencyWheels.filter(
        (wheel) => nosFiltrados.find((no) => no.node === wheel.from) && nosFiltrados.find((no) => no.node === wheel.to),
    );
    nosFiltrados.sort((a, b) => b.node.localeCompare(a.node)).sort((a, b) => (a.weight < b.weight ? 1 : -1));

    const [
        shuffleDados,
        setarShuffleDados,
    ] = useState(dataFiltrada);

    useEffect(() => {
        setarShuffleDados(dataFiltrada);
    }, [
        politicaPublica,
        peso,
        height,
        labelEmCima,
    ]);

    function onPress(): void {
        setarShuffleDados(shuffleArray(shuffleDados));
    }

    const lineOptions = {
        chart: {
            height: height ?? 800,
        },
        title: {
            text: '',
        },
        plotOptions: {
            dependencywheel: {
                dataLabels: {
                    enabled: true,
                    style: {
                        textOutline: 'none',
                    },
                },
            },
        },
        series: [
            {
                type: 'dependencywheel',
                accessibility: {
                    enabled: false,
                },
                dataLabels: {
                    enabled: false,
                    color: '#000000',
                    textPath: !labelEmCima
                        ? undefined
                        : {
                              enabled: true,
                              attributes: {
                                  dy: 5,
                              },
                          },
                    distance: !labelEmCima ? undefined : 10,
                },
                size: '95%',
                plotOptions: {
                    dependencywheel: {
                        showInLegend: true,
                        colorByPoint: true,
                    },
                },
                data: shuffleDados,
                nodes: nosImportantes,
            },
        ],
    };

    const table = nosFiltrados.filter((no) => !agenteDaPolitica(politicaPublica, no.node));

    const chunkLength = Math.max(table.length / 2, 1);
    const chunks = [];
    for (let i = 0; i < 2; i++) {
        if (chunkLength * (i + 1) <= table.length) chunks.push(table.slice(chunkLength * i, chunkLength * (i + 1)));
    }
    return (
        <>
            <Button onPress={onPress}>Randon</Button>
            <Chart options={lineOptions as Highcharts.Options} />
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Table
                    width={280}
                    headers={[
                        `pessoa`,
                        'Capital Simbólico',
                    ]}
                    rows={chunks[0].map((no) => [
                        no.node,
                        no.weight.toString(),
                    ])}
                    widthArr={[
                        undefined,
                        50,
                    ]}
                />
                <View style={{ paddingLeft: 8 }}>
                    <Table
                        width={280}
                        headers={[
                            `pessoa`,
                            'Capital Simbólico',
                        ]}
                        rows={chunks[1].map((no) => [
                            no.node,
                            no.weight.toString(),
                        ])}
                        widthArr={[
                            undefined,
                            50,
                        ]}
                    />
                </View>
            </View>
        </>
    );
}

export default DependencyWheelRefactor;

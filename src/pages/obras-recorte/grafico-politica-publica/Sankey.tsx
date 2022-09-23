import { useEffect, useState } from 'react';

import { Button, Chart, Table } from '@base-components';
import { PoliticaPublica, Exposicao, TrocaCapital, ArtigoJornal, Livro } from '@domain';
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

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Sankey({
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
    const trocasPoliticaPublica = politicaPublicaX().filter(
        (troca) =>
            ((agenteDaPolitica(politicaPublica, troca.pessoa1) || autorObraDaPolitica(politicaPublica, troca.pessoa1)) &&
                agenteDaPolitica(politicaPublica, troca.pessoa2)) ||
            autorObraDaPolitica(politicaPublica, troca.pessoa2),
    );
    const trocasArtigosJornais = getTrocasArtigosJornais(politicaPublica).filter(
        (troca) =>
            ((agenteDaPolitica(politicaPublica, troca.pessoa1) || autorObraDaPolitica(politicaPublica, troca.pessoa1)) &&
                agenteDaPolitica(politicaPublica, troca.pessoa2)) ||
            autorObraDaPolitica(politicaPublica, troca.pessoa2),
    );
    const trocasLivros = getTrocasLivros(politicaPublica).filter(
        (troca) =>
            ((agenteDaPolitica(politicaPublica, troca.pessoa1) || autorObraDaPolitica(politicaPublica, troca.pessoa1)) &&
                agenteDaPolitica(politicaPublica, troca.pessoa2)) ||
            autorObraDaPolitica(politicaPublica, troca.pessoa2),
    );
    const trocasExposicoes = getTrocasExposicoes(politicaPublica).filter(
        (troca) =>
            ((agenteDaPolitica(politicaPublica, troca.pessoa1) || autorObraDaPolitica(politicaPublica, troca.pessoa1)) &&
                agenteDaPolitica(politicaPublica, troca.pessoa2)) ||
            autorObraDaPolitica(politicaPublica, troca.pessoa2),
    );

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
                return '#2B61C6';
            case 'Reynaldo Roels':
                return '#D0A639';
            case 'Fernando Cocchiarale':
                return '#761E5B';
            case 'Lauro Cavalcanti':
                return '#C1281B';
            case 'Paulo Venancio Filho':
                return '#CD7D2F';
            case 'Ronaldo Brito':
                return '#ABBD50';
            default:
                return undefined;
        }
    }

    const nosImportantes = nosFiltrados.map((no) => {
        const colorByPoint = agenteDaPolitica(politicaPublica, no.node);

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
            color: colorByPoint ? color(no.node) : getRandomColor(),
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

    const lineOptions: Highcharts.Options | unknown = {
        chart: {
            height: 750,
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
                    allowOverlap: false,
                },
                data: shuffleDados,
                nodes: nosImportantes,
            },
        ],
    };

    return (
        <>
            <Button onPress={onPress}>Randon</Button>
            <Chart options={lineOptions as Highcharts.Options} />
            <Table
                headers={[
                    `pessoa (${nosFiltrados.length}, ${nosFiltrados.filter((node) => !agenteDaPolitica(politicaPublica, node.node)).length})`,
                    peso.toString(),
                ]}
                rows={nosFiltrados.map((no) => [
                    no.node,
                    no.weight.toString(),
                ])}
                widthArr={[
                    undefined,
                    50,
                ]}
            />
        </>
    );
}

export default Sankey;

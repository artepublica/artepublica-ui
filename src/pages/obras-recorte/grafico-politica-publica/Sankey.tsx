import { Chart, Table } from '@base-components';
import { PoliticaPublica, Exposicao, TrocaCapital, ArtigoJornal, Livro } from '@domain';
import { amarelo3, azul, laranja, useTheme, verde, vermelho2, vinho2 } from '@utils';
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

function Sankey({
    politicaPublica,
    peso,
    showLabel,
}: {
    politicaPublica: PoliticaPublica;
    peso: number;
    height?: number;
    showLabel?: number;
    labelEmCima?: boolean;
}): JSX.Element {
    const { theme } = useTheme();
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

    const nosImportantes = nosFiltrados.map((no, index) => {
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
            color: colorByPoint ? color(no.node) : theme.coresGrafico[index + 6],
        };
    });

    const dataFiltrada = dependencyWheels.filter(
        (wheel) => nosFiltrados.find((no) => no.node === wheel.from) && nosFiltrados.find((no) => no.node === wheel.to),
    );
    nosFiltrados.sort((a, b) => b.node.localeCompare(a.node)).sort((a, b) => (a.weight < b.weight ? 1 : -1));

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
                        fontSize: 15,
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
                },
                data: dataFiltrada,
                nodes: nosImportantes,
            },
        ],
    };

    return (
        <>
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

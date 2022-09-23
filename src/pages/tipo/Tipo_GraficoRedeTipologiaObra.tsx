import { ScrollView, View } from 'react-native';

import { Chart } from '@base-components';
import { Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';
import { vinho } from '@utils/theme-provider/themes/cores';

import styles from './styles';

type GraficoRedeTipoTipologiaObraProps = {
    tipo: string;
    tipos: { nome: string; obras: Obra[] }[];
};

function GraficoRedeTipoTipologiaObra({ tipo, tipos }: GraficoRedeTipoTipologiaObraProps): JSX.Element {
    const { theme } = useTheme();

    const tiposOrdenadoPorTotal = [...tipos].filter((autor) => autor.nome !== 'Desconhecida').sort((a, b) => (a.obras.length < b.obras.length ? 1 : -1));
    const maior = tiposOrdenadoPorTotal[0];

    const style = styles();

    const tipologias = maior.obras
        .map((obra) => {
            const tipologia = obra.Tipologia ?? 'Deconhecida';
            const color = theme.tipologia[tipologia.toLowerCase() as keyof TipologiaTheme];
            return {
                id: tipologia,
                marker: { radius: 20 },
                color,
            };
        })
        .reduce<{ id: string; marker: { radius: number }; color: string }[]>((r, e) => {
            if (r.find((tip) => tip.id === e.id) == null) {
                r.push(e);
            }
            return r;
        }, []);

    const titulos = maior.obras.map((obra) => ({
        id: `${obra.Titulo ?? 'Deconhecida'} (${getYear(obra.DataInauguracao) ?? 's.d.'})`,
        marker: { radius: 10 },
        color: `${tipologias.find((tipologia) => tipologia.id === (obra.Tipologia ?? 'Desconhecida'))?.color}80`,
    }));

    const nodes = [{ id: maior.nome, marker: { radius: 30 }, color: vinho }];
    Array.prototype.push.apply(nodes, titulos);
    Array.prototype.push.apply(nodes, tipologias);

    const data = tipologias.map((tipologia) => ({
        from: maior.nome,
        to: tipologia.id,
    }));

    Array.prototype.push.apply(
        data,
        tipologias
            .map((tipologia) => {
                const titulos_tipologia = maior.obras
                    .filter((obra) =>
                        tipo !== 'Autor'
                            ? obra[tipo as keyof Obra] === maior.nome
                            : obra.Autores?.find((artista) => artista.Pessoa?.Nome === maior.nome) != null,
                    )

                    .filter(
                        (obra) => (obra.Tipologia != null && obra.Tipologia === tipologia.id) || (tipologia.id === 'Desconhecida' && obra.Tipologia == null),
                    )
                    .map((obra) => `${obra.Titulo ?? 'Deconhecida'} (${getYear(obra.DataInauguracao) ?? 's.d.'})`);

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

    const options: Highcharts.Options | unknown = {
        chart: {
            height: 700,
            width: 576,
            type: 'networkgraph',
        },
        title: {
            text: '',
        },
        plotOptions: {
            networkgraph: {
                layoutAlgorithm: {
                    //linkLength: 200, // in pixels
                    enableSimulation: true,
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
                    textPath: {
                        //enabled: true,
                        attributes: {
                            dy: -12,
                            //startOffset: '45%',
                            //textLength: 200,
                        },
                    },
                    allowOverlap: true,
                    color: theme.text.textColor,
                    dy: -12,
                },
                data,
                nodes,
            },
        ],
    };

    return (
        <View style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Chart options={options as Highcharts.Options} />
            </ScrollView>
        </View>
    );
}

export default GraficoRedeTipoTipologiaObra;

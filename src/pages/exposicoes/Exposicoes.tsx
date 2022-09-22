import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Table } from '@base-components';
import { Exposicao } from '@domain';
import * as exposicoes from '@utils/data/exposicoes';

function Exposicoes(): JSX.Element {
    const typed_exposicoes: Record<string, Exposicao> = exposicoes;

    const style = styles();

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scroll}>
                <Table
                    width={567}
                    headers={[
                        'Exposição',
                        'Informações',
                    ]}
                    rows={Object.keys(typed_exposicoes).map((key) => {
                        const exposicao = typed_exposicoes[key];

                        return [
                            `${exposicao.Nome} (${exposicao.DataInicio ?? ''}${exposicao.DataFim ? ' - ' + exposicao.DataFim : ''}) \n` +
                                `${exposicao.Instituicao ?? exposicao.Local}, ${exposicao.Cidade}${exposicao.Pais !== 'Brasil' ? ', ' + exposicao.Pais : ''}`,
                            (exposicao.Curadores && exposicao.Curadores?.length > 0
                                ? `Curadoria: ${exposicao.Curadores?.map((pessoa) => pessoa.Nome).join(', ')}`
                                : '') +
                                (exposicao.Expositores && exposicao.Expositores?.length
                                    ? `${exposicao.Curadores && exposicao.Curadores?.length ? '\n' : ''}Expositores: ${exposicao.Expositores?.map(
                                          (pessoa) => pessoa.Nome,
                                      ).join(', ')}`
                                    : '') +
                                (exposicao.CatalogoEscritoPor && exposicao.CatalogoEscritoPor?.length
                                    ? `\nTexto Catálogo: ${exposicao.CatalogoEscritoPor?.map((pessoa) => pessoa.Nome).join(', ')}`
                                    : '') +
                                (exposicao.Juri && exposicao.Curadores?.length ? `Júri: ${exposicao.Juri?.map((pessoa) => pessoa.Nome).join(', ')}` : '') +
                                (exposicao.JuriDeSelecao && exposicao.JuriDeSelecao?.length
                                    ? `\nJúri de Seleção: ${exposicao.JuriDeSelecao?.map((pessoa) => pessoa.Nome).join(', ')}`
                                    : '') +
                                (exposicao.Montadores && exposicao.Montadores?.length
                                    ? `\nMontagem: ${exposicao.Montadores?.map((pessoa) => pessoa.Nome).join(', ')}`
                                    : '') +
                                (exposicao.Organizadores && exposicao.Organizadores?.length
                                    ? `\nOrganização: ${exposicao.Organizadores?.map((pessoa) => pessoa.Nome).join(', ')}`
                                    : '') +
                                (exposicao.ComissaoDePremiacao && exposicao.ComissaoDePremiacao?.length
                                    ? `\nComissão de Premiação: ${exposicao.ComissaoDePremiacao?.map((pessoa) => pessoa.Nome).join(', ')}`
                                    : '') +
                                (exposicao.ComissaoDeSelecao && exposicao.ComissaoDeSelecao?.length
                                    ? `\nComissão de Seleção: ${exposicao.ComissaoDeSelecao?.map((pessoa) => pessoa.Nome).join(', ')}`
                                    : ''),
                        ];
                    })}
                />
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
            padding: 24,
            userSelect: 'auto',
        },
        scroll: {
            width: '100%',
            userSelect: 'auto',
        },
        head: { height: 40 },
    });
}

export default Exposicoes;

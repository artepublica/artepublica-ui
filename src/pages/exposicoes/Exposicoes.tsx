import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Table } from '@base-components';
import { Exposicao } from '@domain';
import * as exposicoes from '@utils/data/exposicoes';

function Exposicoes(): JSX.Element {
    const typed_exposicoes: Record<string, Exposicao> = exposicoes;

    const style = styles();

    return (
        <ScrollView contentContainerStyle={style.container}>
            <Table
                //width={567}
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
    );
}

function styles() {
    return StyleSheet.create({
        container: {
            paddingTop: 24,
            paddingHorizontal: 24,
        },
        head: { height: 40 },
    });
}

export default Exposicoes;

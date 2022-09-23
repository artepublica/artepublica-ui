import { ScrollView, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, Image } from '@base-components';
import { Obra } from '@domain';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra_artepublica';

import styles from './styles';

function Home(): JSX.Element {
    const style = styles();
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const obrasComImagem = Object.keys(typed_obra_artepublica)
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Titulo ?? 'Desconhecida').localeCompare(obraB.Titulo ?? 'Desconhecida');
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return getYear(obraA.DataInauguracao) < getYear(obraB.DataInauguracao) ? -1 : 1;
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Tipologia ?? 'Desconhecida').localeCompare(obraB.Tipologia ?? 'Desconhecida');
        });

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Grid style={{ width: 568 }}>
                    {obrasComImagem
                        .reduce<string[]>((resultado, key, index) => {
                            const obra: Obra = typed_obra_artepublica[key];

                            if (index === 0) {
                                return [
                                    obra.Tipologia ?? 'Desconhecida',
                                    key,
                                ];
                            } else {
                                const obraAnterior: Obra = typed_obra_artepublica[obrasComImagem[index - 1]];

                                if ((obra.Tipologia ?? 'Desconhecida') !== (obraAnterior.Tipologia ?? 'Desconhecida')) {
                                    console.log(obraAnterior.Tipologia);
                                    console.log(obra.Tipologia);
                                    return [
                                        ...resultado,
                                        obra.Tipologia ?? 'Desconhecida',
                                        key,
                                    ];
                                }
                            }

                            return [
                                ...resultado,
                                key,
                            ];
                        }, [])
                        .reduce<string[][]>((all, one, i) => {
                            const ch = Math.floor(i / 4);
                            all[ch] = ([] as string[]).concat(all[ch] || [], one);
                            return all;
                        }, [])
                        .map((row) => {
                            return (
                                <Row style={style.row}>
                                    {row.map((col, colIndex) => {
                                        const obra: Obra = typed_obra_artepublica[col];
                                        return (
                                            <Col
                                                style={[
                                                    style.col,
                                                    { marginRight: colIndex !== row.length - 1 ? 8 : 0 },
                                                ]}
                                            >
                                                {obra == null && (
                                                    <View style={{ width: 136, backgroundColor: '#CC1964', height: '100%' }}>
                                                        <View
                                                            style={{
                                                                padding: 8,
                                                                height: 140,
                                                                width: 136,
                                                            }}
                                                        >
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 20,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '700',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                {col}
                                                            </Text>
                                                        </View>
                                                        <View style={{ padding: 8 }}>
                                                            <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}>
                                                                {`Título, ano\n\n`}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                Autoria
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                Material: obra; pedestal
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                Endereço
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                Bairro
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                Status
                                                            </Text>
                                                        </View>
                                                    </View>
                                                )}
                                                {obra != null && (
                                                    <View style={{ width: 136, height: '100%', backgroundColor: '#CC1964' }}>
                                                        <View
                                                            style={{
                                                                backgroundColor: '#FFFFFF',
                                                                height: 140,
                                                                width: 136,
                                                            }}
                                                        >
                                                            <View
                                                                style={{
                                                                    backgroundColor: '#FFFFFF',
                                                                    height: obra.Imagem != null && obra.Imagem !== '' ? 140 : 136,
                                                                    width: 136,
                                                                    borderWidth: obra.Imagem != null && obra.Imagem !== '' ? 0 : 1,
                                                                    borderColor: '#CC1964',
                                                                    marginBottom: obra.Imagem != null && obra.Imagem !== '' ? 0 : 4,
                                                                }}
                                                            >
                                                                <Image source={obra.Imagem} height={136} width={136} />
                                                            </View>
                                                        </View>
                                                        <View style={{ padding: 8 }}>
                                                            <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}>
                                                                {`${obra.Titulo ?? 'Desconhecida'}${
                                                                    obra.DataInauguracao ? `, ${getYear(obra.DataInauguracao)}` : ', s.d.'
                                                                }\n\n`}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                {obra.Autores?.map((autor) => autor.Pessoa?.Nome).join(', ') ?? 'Desconhecida'}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                {`${obra.Material ?? 'Desconhecida'}${obra.MaterialBase ? `; ${obra.MaterialBase}` : ''}`}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                {obra.Endereco ?? ''}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                {obra.Bairro ?? ''}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: 'Arial',
                                                                    fontSize: 11,
                                                                    color: '#FFFFFF',
                                                                    fontWeight: '400',
                                                                    lineHeight: 13,
                                                                }}
                                                            >
                                                                {obra.Status ?? ''}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                )}
                                            </Col>
                                        );
                                    })}
                                </Row>
                            );
                        })}
                </Grid>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

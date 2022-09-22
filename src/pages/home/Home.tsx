import { ImageSourcePropType, ScrollView, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { SafeAreaView } from 'react-native-safe-area-context';

import imagems from '@assets/imagems';
import { Text, Image } from '@base-components';
import { Obra } from '@domain';
import * as obra_artepublica from '@utils/data/obra_artepublica';

import styles from './styles';

function Home(): JSX.Element {
    const style = styles();
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const obrasComImagem = Object.keys(typed_obra_artepublica)
        .filter((key) => {
            const obra: Obra = typed_obra_artepublica[key];

            const typed_imagems: Record<string, ImageSourcePropType> = imagems;
            const img = typed_imagems[obra.Imagem ?? ''];

            return img != null;
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Titulo ?? 'Desconhecida').localeCompare(obraB.Titulo ?? 'Desconhecida');
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Tipologia ?? 'Desconhecida').localeCompare(obraB.Tipologia ?? 'Desconhecida');
        });

    const obrasSemImagem = Object.keys(typed_obra_artepublica)
        .filter((key) => {
            const obra: Obra = typed_obra_artepublica[key];

            const typed_imagems: Record<string, ImageSourcePropType> = imagems;
            const img = typed_imagems[obra.Imagem ?? ''];

            return img == null;
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Titulo ?? 'Desconhecida').localeCompare(obraB.Titulo ?? 'Desconhecida');
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Tipologia ?? 'Desconhecida').localeCompare(obraB.Tipologia ?? 'Desconhecida');
        });

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <Text>Projeto de Doutorado de Aline Rayane de Oliveira</Text>
                <Text>{'Com Imagem:' + obrasComImagem.length}</Text>
                <Text>{'Sem Imagem:' + obrasSemImagem.length}</Text>
                <Grid style={{ width: 567 }}>
                    {obrasComImagem
                        .reduce<string[][]>((all, one, i) => {
                            const ch = Math.floor(i / 4);
                            all[ch] = ([] as string[]).concat(all[ch] || [], one);
                            return all;
                        }, [])
                        .map((row) => (
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
                                            <View style={{ width: 136, backgroundColor: '#CC1964', height: '100%' }}>
                                                <View style={{ paddingBottom: 4, backgroundColor: '#FFFFFF' }}>
                                                    <Image source={obra.Imagem} height={136} width={136} />
                                                </View>
                                                <View style={{ padding: 8 }}>
                                                    <Text style={{ fontFamily: 'Arial', fontSize: 11, color: '#FFFFFF', fontWeight: '700' }}>
                                                        {`${obra.Titulo ?? 'Desconhecida'}${obra.DataInauguracao ? `, ${obra.DataInauguracao}` : ''}`}
                                                    </Text>
                                                    <Text style={{ fontFamily: 'Arial', fontSize: 11, color: '#FFFFFF', fontWeight: '400' }}>
                                                        {obra.Autores?.map((autor) => autor.Pessoa?.Nome).join(', ') ?? 'Desconhecida'}
                                                    </Text>
                                                    <Text style={{ fontFamily: 'Arial', fontSize: 11, color: '#FFFFFF', fontWeight: '400' }}>
                                                        {`${obra.Material ?? 'Desconhecida'}${obra.MaterialBase ? `; ${obra.MaterialBase}` : ''}`}
                                                    </Text>
                                                    <Text style={{ fontFamily: 'Arial', fontSize: 11, color: '#FFFFFF', fontWeight: '400' }}>
                                                        {obra.Endereco ?? ''}
                                                    </Text>
                                                    <Text style={{ fontFamily: 'Arial', fontSize: 11, color: '#FFFFFF', fontWeight: '400' }}>
                                                        {obra.Bairro ?? ''}
                                                    </Text>
                                                    <Text style={{ fontFamily: 'Arial', fontSize: 11, color: '#FFFFFF', fontWeight: '400' }}>
                                                        {obra.Status ?? ''}
                                                    </Text>
                                                </View>
                                            </View>
                                        </Col>
                                    );
                                })}
                            </Row>
                        ))}
                </Grid>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

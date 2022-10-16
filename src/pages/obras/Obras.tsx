import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { Text, Image } from '@base-components';
import { Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';
import * as obra_artepublica from '@utils/data/obra';
import { RootNavigatorParamList } from 'src/app/navigation/RootNavigator';

import styles from './styles';

function Obras(): JSX.Element {
    const { width } = useWindowDimensions();
    const { theme } = useTheme();
    const navigation = useNavigation<NavigationProp<RootNavigatorParamList>>();
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

            return (getYear(obraA.DataInauguracao) ?? 0) < (getYear(obraB.DataInauguracao) ?? 0) ? -1 : 1;
        })
        .sort((keyA, keyB) => {
            const obraA: Obra = typed_obra_artepublica[keyA];
            const obraB: Obra = typed_obra_artepublica[keyB];

            return (obraA.Tipologia ?? 'Desconhecida').localeCompare(obraB.Tipologia ?? 'Desconhecida');
        });

    const colunas = Math.floor(width / 144);
    const gridWidth = (colunas - 1) * 144 + 136;
    const remainingWidth = width - 16 - gridWidth;

    const data = obrasComImagem
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
            const ch = Math.floor(i / colunas);
            all[ch] = ([] as string[]).concat(all[ch] || [], one);
            return all;
        }, []);

    return (
        <View style={style.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8 }}>
                <FlatList
                    data={data}
                    style={{ width: '100%' }}
                    renderItem={({ item, index }) => {
                        const row = item;
                        const rowIndex = index;
                        return (
                            <Grid style={{ paddingLeft: remainingWidth / 2 }}>
                                <Row style={style.row} key={rowIndex}>
                                    {row.map((col, colIndex) => {
                                        const obra: Obra = typed_obra_artepublica[col];
                                        return (
                                            <Col
                                                style={[
                                                    style.col,
                                                    { marginRight: colIndex !== colunas - 1 ? 8 : 0 },
                                                ]}
                                                key={colIndex}
                                                onPress={() => {
                                                    if (obra != null) {
                                                        navigation.navigate('Obra', { obra });
                                                    }
                                                }}
                                            >
                                                {obra == null && (
                                                    <View
                                                        style={{
                                                            width: 136,
                                                            backgroundColor:
                                                                theme.tipologia[col.toLowerCase() as keyof TipologiaTheme] ?? theme.tipologia.desconhecida,
                                                            height: '100%',
                                                        }}
                                                    >
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
                                                                }}
                                                            >
                                                                {col}
                                                            </Text>
                                                        </View>
                                                        <View style={{ padding: 8 }}>
                                                            <Text
                                                                style={{ fontFamily: 'Arial', fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}
                                                            >{`Título, ano\n\n`}</Text>
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
                                                    <View
                                                        style={{
                                                            width: 136,
                                                            height: '100%',
                                                            backgroundColor:
                                                                theme.tipologia[obra.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme] ??
                                                                theme.tipologia.desconhecida,
                                                        }}
                                                    >
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
                                                                    borderColor:
                                                                        theme.tipologia[obra.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme] ??
                                                                        theme.tipologia.desconhecida,
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
                            </Grid>
                        );
                    }}
                />
            </View>
        </View>
    );
}

export default Obras;

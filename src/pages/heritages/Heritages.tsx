import { useRouter } from 'expo-router';
import { FlatList, Platform, useWindowDimensions, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { Image, Text } from '@base-components';
import { Obra } from '@domain';
import { TipologiaTheme, useTheme } from '@utils';
import { getYear } from '@utils/analysis/analysis_utils';
import * as obra_artepublica from '@utils/data/thesisHeritages'; //TODO: use or create analysis to type

import styles from './styles';

function Heritages(): JSX.Element {
  const { width } = useWindowDimensions();
  const { theme } = useTheme();
  const router = useRouter();
  const style = styles();
  const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

  const obrasComImagem = Object.keys(typed_obra_artepublica)
    .sort((keyA, keyB) => {
      const heritageA: Obra = typed_obra_artepublica[keyA];
      const heritageB: Obra = typed_obra_artepublica[keyB];

      return (heritageA.Titulo ?? 'Desconhecida').localeCompare(
        heritageB.Titulo ?? 'Desconhecida',
      );
    })
    .sort((keyA, keyB) => {
      const heritageA: Obra = typed_obra_artepublica[keyA];
      const heritageB: Obra = typed_obra_artepublica[keyB];

      return (getYear(heritageA.DataInauguracao) ?? 0) <
        (getYear(heritageB.DataInauguracao) ?? 0)
        ? -1
        : 1;
    })
    .sort((keyA, keyB) => {
      const heritageA: Obra = typed_obra_artepublica[keyA];
      const heritageB: Obra = typed_obra_artepublica[keyB];

      return (heritageA.Tipologia ?? 'Desconhecida').localeCompare(
        heritageB.Tipologia ?? 'Desconhecida',
      );
    });

  const allowedWidth = width - 24;
  const colunas = Math.floor(allowedWidth / 144);
  const minGridWidth = (colunas - 1) * 144 + 136;
  const remainingWidth = allowedWidth - minGridWidth;
  const padding = remainingWidth / (colunas + 1);

  const data = obrasComImagem
    .reduce<string[]>((resultado, key, index) => {
      const heritage: Obra = typed_obra_artepublica[key];

      if (index === 0) {
        return [heritage.Tipologia ?? 'Desconhecida', key];
      } else {
        const obraAnterior: Obra =
          typed_obra_artepublica[obrasComImagem[index - 1]];

        if (
          (heritage.Tipologia ?? 'Desconhecida') !==
          (obraAnterior.Tipologia ?? 'Desconhecida')
        ) {
          return [...resultado, heritage.Tipologia ?? 'Desconhecida', key];
        }
      }

      return [...resultado, key];
    }, [])
    .reduce<string[][]>((all, one, i) => {
      const ch = Math.floor(i / colunas);
      all[ch] = ([] as string[]).concat(all[ch] || [], one);
      return all;
    }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        style={{ width: '100%' }}
        renderItem={({ item, index }) => {
          const row = item;
          const rowIndex = index;
          return (
            <Grid style={{ paddingLeft: padding + 12 }}>
              <Row style={style.row} key={rowIndex}>
                {row.map((col, colIndex) => {
                  const heritage: Obra = typed_obra_artepublica[col];
                  return (
                    <Col
                      style={[
                        style.col,
                        {
                          marginRight:
                            colIndex !== colunas - 1 ? padding + 8 : 0,
                        },
                      ]}
                      key={colIndex}
                      onPress={
                        heritage != null
                          ? () =>
                              router.push({
                                pathname: '/heritage',
                                params: { heritage: heritage.ID },
                              })
                          : undefined
                      }
                    >
                      {heritage == null && (
                        <View
                          style={{
                            width: 136,
                            backgroundColor:
                              theme.tipologia[
                                col.toLowerCase() as keyof TipologiaTheme
                              ] ?? theme.tipologia.desconhecida,
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
                              style={{
                                fontFamily: 'Arial',
                                fontSize: 12,
                                color: '#FFFFFF',
                                fontWeight: '700',
                              }}
                            >{`Título, ano${
                              Platform.OS === 'web' ? '\n\n' : '\n'
                            }`}</Text>
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
                              Material: heritage; pedestal
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
                      {heritage != null && (
                        <View
                          style={{
                            width: 136,
                            backgroundColor:
                              theme.tipologia[
                                heritage.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme
                              ] ?? theme.tipologia.desconhecida,
                            height: '100%',
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
                                height:
                                  heritage.Imagem != null &&
                                  heritage.Imagem !== ''
                                    ? 140
                                    : 136,
                                width: 136,
                                borderWidth:
                                  heritage.Imagem != null &&
                                  heritage.Imagem !== ''
                                    ? 0
                                    : 1,
                                borderColor:
                                  theme.tipologia[
                                    heritage.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme
                                  ] ?? theme.tipologia.desconhecida,
                                marginBottom:
                                  heritage.Imagem != null &&
                                  heritage.Imagem !== ''
                                    ? 0
                                    : 4,
                              }}
                            >
                              <Image
                                source={heritage.Imagem}
                                height={136}
                                width={136}
                              />
                            </View>
                          </View>
                          <View style={{ padding: 8 }}>
                            <Text
                              style={{
                                fontFamily: 'Arial',
                                fontSize: 12,
                                color: '#FFFFFF',
                                fontWeight: '700',
                              }}
                            >
                              {`${heritage.Titulo ?? 'Desconhecida'}${
                                heritage.DataInauguracao
                                  ? `, ${getYear(heritage.DataInauguracao)}`
                                  : ', s.d.'
                              }${Platform.OS === 'web' ? '\n\n' : '\n'}`}
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
                              {heritage.Authors?.map(
                                (author) => author.Person?.Name,
                              ).join(', ') ?? 'Desconhecida'}
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
                              {`${heritage.Material ?? 'Desconhecida'}${heritage.MaterialBase ? `; ${heritage.MaterialBase}` : ''}`}
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
                              {heritage.Endereco ?? ''}
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
                              {heritage.Bairro ?? ''}
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
                              {heritage.Status ?? ''}
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
  );
}

export default Heritages;

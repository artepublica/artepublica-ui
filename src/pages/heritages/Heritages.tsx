import { JSX } from 'react';

import { useRouter } from 'expo-router';
import { FlatList, Platform, useWindowDimensions, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { Image, Text } from '@base-components';
import { heritages } from '@data';
import { getYear, TypologyTheme, useTheme } from '@utils';

import styles from './styles';

function Heritages(): JSX.Element {
  const { width } = useWindowDimensions();
  const { theme } = useTheme();
  const router = useRouter();
  const style = styles();

  const heritagesSorted = heritages
    .sort((heritageA, heritageB) => {
      return (heritageA.Title ?? 'Desconhecida').localeCompare(heritageB.Title ?? 'Desconhecida');
    })
    .sort((heritageA, heritageB) => {
      return (getYear(heritageA.OpeningDate) ?? 0) < (getYear(heritageB.OpeningDate) ?? 0) ? -1 : 1;
    })
    .sort((heritageA, heritageB) => {
      return (heritageA.Typology ?? 'Desconhecida').localeCompare(heritageB.Typology ?? 'Desconhecida');
    });

  const allowedWidth = width - 24;
  const columns = Math.floor(allowedWidth / 144);
  const minGridWidth = (columns - 1) * 144 + 136;
  const remainingWidth = allowedWidth - minGridWidth;
  const padding = remainingWidth / (columns + 1);

  const data = heritagesSorted
    .reduce<string[]>((result, heritage, index) => {
      if (index === 0) {
        return [heritage.Typology ?? 'Desconhecida', heritage.ID.toString()];
      } else {
        const previousHeritage = heritagesSorted[index - 1];

        if ((heritage.Typology ?? 'Desconhecida') !== (previousHeritage.Typology ?? 'Desconhecida')) {
          return [...result, heritage.Typology ?? 'Desconhecida', heritage.ID.toString()];
        }
      }

      return [...result, heritage.ID.toString()];
    }, [])
    .reduce<string[][]>((all, one, i) => {
      const ch = Math.floor(i / columns);
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
                  const heritage = heritagesSorted.find((heritage) => heritage.ID.toString() === col);
                  return (
                    <Col
                      style={[
                        style.col,
                        {
                          marginRight: colIndex !== columns - 1 ? padding + 8 : 0,
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
                              theme.typology[col.toLowerCase() as keyof TypologyTheme] ?? theme.typology.desconhecida,
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
                            >{`Título, ano${Platform.OS === 'web' ? '\n\n' : '\n'}`}</Text>
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
                              theme.typology[heritage.Typology?.toLocaleLowerCase() as keyof TypologyTheme] ??
                              theme.typology.desconhecida,
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
                                height: heritage.Image != null && heritage.Image !== '' ? 140 : 136,
                                width: 136,
                                borderWidth: heritage.Image != null && heritage.Image !== '' ? 0 : 1,
                                borderColor:
                                  theme.typology[heritage.Typology?.toLocaleLowerCase() as keyof TypologyTheme] ??
                                  theme.typology.desconhecida,
                                marginBottom: heritage.Image != null && heritage.Image !== '' ? 0 : 4,
                              }}
                            >
                              <Image source={heritage.Image} height={136} width={136} />
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
                              {`${heritage.Title ?? 'Desconhecida'}${
                                heritage.OpeningDate ? `, ${getYear(heritage.OpeningDate)}` : ', s.d.'
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
                              {heritage.Authors?.map((author) => author.Person?.Name).join(', ') ?? 'Desconhecida'}
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
                              {`${heritage.Material ?? 'Desconhecida'}${heritage.BaseMaterial ? `; ${heritage.BaseMaterial}` : ''}`}
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
                              {heritage.Address ?? ''}
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
                              {heritage.Neighborhood ?? ''}
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

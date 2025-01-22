import React, { useState } from 'react';

import { FlatList, ScrollView, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { Text } from '@base-components';

import styles from './styles';

function Glossary(): JSX.Element {
  const { width } = useWindowDimensions();
  const style = styles();

  const glossary: { word: string; description: string }[] = [
    {
      word: 'Arte Pública',
      description:
        'O termo faz referência a obras de arte visuais que estão localizadas no espaço público; são de propriedade pública; motivam a participação cívica e política e, por isso, estão envoltas por disputas simbólicas de representação social',
    },
    {
      word: 'Busto',
      description:
        'Identifica a representação da parte superior do corpo humano, podendo incluir uma ou mais cabeças, o pescoço, uma parte variável das costas, dos braços e do peito.',
    },
    {
      word: 'Cabeça',
      description:
        'Identifica a escultura que representa a parte correspondente à extremidade superior do corpo humano ou à extremidade anterior do corpo de um animal, incluindo a cabeça e o pescoço. ',
    },
    {
      word: 'Escultura',
      description: 'É um objeto artístico tridimensional que ocupa um determinado espaço com seus volumes.',
    },
    {
      word: 'Estátua',
      description:
        'É toda escultura que representa uma figura completa (homem, animal, híbrido) de pé, sentada, ajoelhada ou deitada, em qualquer matéria. ',
    },
    {
      word: 'Grupo escultórico',
      description:
        'Identifica a reunião de duas ou mais figuras sobre o mesmo suporte (soco, embasamento, pedestal...) que participam numa mesma ação ou estão relacionadas por uma situação que lhes é comum. ',
    },
    {
      word: 'Lâmina escultórica',
      description:
        'Executada em metal, pode ser pouco espessa, mas é rígida, apresentando um campo figurativo, uma ornamentação gravada ou uma inscrição, em relevo ou insculpida. Pode ser aplicada a um edifício ou a um monumento.',
    },
    {
      word: 'Obelisco',
      description:
        'É uma pirâmide quadrangular, habitualmente monolítica, usada fundamentalmente como marco monumental.',
    },
    {
      word: 'Relevo',
      description:
        'Identifica qualquer obra esculpida na qual as figuras se projetam a partir de um fundo. Classificam-se pelo grau de projeção do seu volume: baixo-relevo, médio-relevo, alto relevo. ',
    },
  ];

  const [glossaryState, setGlossaryState] = useState<{ word: string; open: boolean }[]>(
    glossary.map((item) => ({ word: item.word, open: false })),
  );

  const columns = Math.floor(width / 256);
  const gridWidth = (columns - 1) * 256 + 240;
  const remainingWidth = width - 16 - gridWidth;

  const data = glossary.reduce<{ word: string; description: string }[][]>((all, one, i) => {
    const ch = Math.floor(i / columns);
    all[ch] = ([] as { word: string; description: string }[]).concat(all[ch] || [], one);
    return all;
  }, []);

  const changeState = (state: { word: string; open: boolean }) => {
    const newState = glossaryState.map((item) => {
      if (item.word === state.word) {
        return { word: item.word, open: !state.open };
      }
      return item;
    });
    setGlossaryState(newState);
  };

  return (
    <View style={style.container}>
      <View style={{ width: '100%', height: 48, backgroundColor: '#FFC003' }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
            color: '#CC1964',
            paddingTop: 4,
            paddingLeft: 16,
          }}
        >
          Glossário
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <FlatList
              scrollEnabled={false}
              data={data}
              style={{ width: '100%' }}
              renderItem={({ item: row, index: rowIndex }) => {
                return (
                  <Grid style={{ paddingLeft: remainingWidth / 2 }}>
                    <Row style={style.row} key={rowIndex}>
                      {[
                        ...row,
                        ...Array(columns - row.length).map(() => ({
                          word: 'error',
                          description: 'error',
                        })),
                      ].map((col, colIndex) => {
                        const state = glossaryState.find(
                          (item) => typeof col != typeof String && col?.word && item.word === col.word,
                        );
                        return (
                          <Col
                            style={[
                              style.col,
                              {
                                marginRight: colIndex !== columns - 1 ? 16 : 0,
                              },
                            ]}
                            key={colIndex}
                          >
                            <View style={{ width: 240 }}>
                              {state && (
                                <>
                                  <TouchableOpacity onPress={() => changeState(state)}>
                                    <Text
                                      style={{
                                        fontSize: 20,
                                        fontWeight: '700',
                                      }}
                                    >
                                      {col.word}
                                    </Text>
                                  </TouchableOpacity>
                                  {state.open && (
                                    <Text
                                      style={{
                                        fontSize: 16,
                                        fontWeight: '400',
                                        paddingTop: 8,
                                        textAlign: 'justify',
                                      }}
                                    >
                                      {col.description}
                                    </Text>
                                  )}
                                </>
                              )}
                            </View>
                          </Col>
                        );
                      })}
                    </Row>
                  </Grid>
                );
              }}
            />
          </View>
          <View style={{ flexDirection: 'column', padding: 16 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 88, minWidth: 88 }}>
                <Text>Referências:</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ textAlign: 'justify', width: width - 88 - 32 }}>
                  OLIVEIRA, Aline Rayane de Souza. Arte Pública na cidade do Rio de Janeiro e o programa Esculturas
                  Urbanas. Tese (Doutorado em Urbanismo), Universidade Federal do Rio de Janeiro, Rio de Janeiro, 2022.
                </Text>
                <Text style={{ textAlign: 'justify', width: width - 88 - 32 }}>
                  CARVALHO, Maria João Vilhena. Normas de inventário: escultura. Lisboa: Instituto Português de Museus,
                  2004.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Glossary;

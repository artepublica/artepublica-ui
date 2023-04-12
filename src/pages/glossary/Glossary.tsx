import { useState } from 'react';

import { FlatList, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { Text } from '@base-components';

import styles from './styles';

function Glossary(): JSX.Element {
    const { width } = useWindowDimensions();
    const style = styles();

    const glossary: { termo: string; descricao: string }[] = [
        {
            termo: 'Arte Pública',
            descricao: 'O termo faz referência a obras de arte visuais que estão localizadas no espaço público; são de propriedade pública; motivam a participação cívica e política e, por isso, estão envoltas por disputas simbólicas de representação social',
        },
        {
            termo: 'Busto',
            descricao: 'Identifica a representação da parte superior do corpo humano, podendo incluir uma ou mais cabeças, o pescoço, uma parte variável das costas, dos braços e do peito.',
        },
        {
            termo: 'Cabeça',
            descricao: 'Identifica a escultura que representa a parte correspondente à extremidade superior do corpo humano ou à extremidade anterior do corpo de um animal, incluindo a cabeça e o pescoço. ',
        },
        {
            termo: 'Escultura',
            descricao: 'É um objeto artístico tridimensional que ocupa um determinado espaço com seus volumes.',
        },
        {
            termo: 'Estátua',
            descricao: 'É toda escultura que representa uma figura completa (homem, animal, híbrido) de pé, sentada, ajoelhada ou deitada, em qualquer matéria. ',
        },
        {
            termo: 'Grupo escultórico',
            descricao: 'Identifica a reunião de duas ou mais figuras sobre o mesmo suporte (soco, embasamento, pedestal...) que participam numa mesma ação ou estão relacionadas por uma situação que lhes é comum. ',
        },
        {
            termo: 'Lâmina escultórica',
            descricao: 'Executada em metal, pode ser pouco espessa, mas é rígida, apresentando um campo figurativo, uma ornamentação gravada ou uma inscrição, em relevo ou insculpida. Pode ser aplicada a um edifício ou a um monumento.',
        },
        {
            termo: 'Obelisco',
            descricao: 'É uma pirâmide quadrangular, habitualmente monolítica, usada fundamentalmente como marco monumental.',
        },
        {
            termo: 'Relevo',
            descricao: 'Identifica qualquer obra esculpida na qual as figuras se projetam a partir de um fundo. Classificam-se pelo grau de projeção do seu volume: baixo-relevo, médio-relevo, alto relevo. ',
        },
    ];

    // Referências: OLIVEIRA, Aline Rayane de Souza. Arte Pública na cidade do Rio de Janeiro e o programa Esculturas Urbanas. Tese (Doutorado em Urbanismo), Universidade Federal do Rio de Janeiro, Rio de Janeiro, 2022.
    //              CARVALHO, Maria João Vilhena. Normas de inventário: escultura. Lisboa: Instituto Português de Museus, 2004.

    const [
        glossaryState,
        setGlossaryState,
    ] = useState<{ termo: string; open: boolen }>(glossary.map((item) => ({ termo: item.termo, open: false })));

    const colunas = Math.floor(width / 256);
    const gridWidth = (colunas - 1) * 256 + 240;
    const remainingWidth = width - 16 - gridWidth;

    const data = glossary.reduce<{ termo: string; descricao: string }[][]>((all, one, i) => {
        const ch = Math.floor(i / colunas);
        all[ch] = ([] as string[]).concat(all[ch] || [], one);
        return all;
    }, []);

    const changeState = (state) => {
        const newState = glossaryState.map((item) => {
            if (item.termo === state.termo) {
                return { termo: item.termo, open: !state.open };
            }
            return item;
        });
        setGlossaryState(newState);
    };

    return (
        <View style={style.container}>
            <View style={{ width: '100%', height: 48, backgroundColor: '#FFC003' }}>
                <Text style={{ fontSize: 32, fontWeight: 700, color: '#CC1964', paddingTop: 4, paddingLeft: 16 }}>Glossário</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
                <FlatList
                    data={data}
                    style={{ width: '100%' }}
                    renderItem={({ item: row, index: rowIndex }) => {
                        return (
                            <Grid style={{ paddingLeft: remainingWidth / 2 }}>
                                <Row style={style.row} key={rowIndex}>
                                    {[
                                        ...row,
                                        ...Array(colunas - row.length).map(() => 'error'),
                                    ].map((col, colIndex) => {
                                        const state = glossaryState.find((item) => col?.termo && item.termo === col.termo);
                                        return (
                                            <Col
                                                style={[
                                                    style.col,
                                                    { marginRight: colIndex !== colunas - 1 ? 16 : 0 },
                                                ]}
                                                key={colIndex}
                                            >
                                                <View style={{ width: 240 }}>
                                                    {state && (
                                                        <>
                                                            <TouchableOpacity onPress={() => changeState(state)}>
                                                                <Text style={{ fontSize: 20, fontWeight: 700 }}>{col.termo}</Text>
                                                            </TouchableOpacity>
                                                            {state.open && (
                                                                <Text style={{ fontSize: 16, fontWeight: 400, paddingTop: 8, textAlign: 'justify' }}>
                                                                    {col.descricao}
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
        </View>
    );
}

export default Glossary;

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
            termo: 'termo1',
            descricao: 'olá, eu sou a descrição do termo, que legal né? Pode digitar o quanto quiser.',
        },
        {
            termo: 'termo2',
            descricao: 'descrição',
        },
        {
            termo: 'termo3',
            descricao: 'descrição',
        },
        {
            termo: 'termo4',
            descricao: 'descrição',
        },
        {
            termo: 'termo5',
            descricao: 'descrição',
        },
        {
            termo: 'termo6',
            descricao: 'descrição',
        },
        {
            termo: 'termo7',
            descricao: 'descrição',
        },
        {
            termo: 'termo8',
            descricao: 'descrição',
        },
        {
            termo: 'termo9',
            descricao: 'descrição',
        },
        {
            termo: 'termo10',
            descricao: 'descrição',
        },
        {
            termo: 'termo11',
            descricao: 'descrição',
        },
        {
            termo: 'termo12',
            descricao: 'descrição',
        },
        {
            termo: 'termo13',
            descricao: 'descrição',
        },
    ];

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

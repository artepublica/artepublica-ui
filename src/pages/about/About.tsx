import { ScrollView, View, Image, useWindowDimensions } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { Text } from '@base-components';

import styles from './styles';

const tamanhoImagem = 240;

function About(): JSX.Element {
    const { width } = useWindowDimensions();
    const style = styles();

    const tamanhoGrid = tamanhoImagem * 2 + 64 + 64;

    const colunas = width > tamanhoGrid ? 2 : 1;
    const restante = width - (tamanhoImagem * colunas + 64 + 64);

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={{ width: '100%', height: 48, backgroundColor: '#FFC003' }}>
                <Text style={{ fontSize: 32, fontWeight: 700, color: '#CC1964', paddingTop: 4, paddingLeft: 16 }}>Sobre</Text>
            </View>
            <View style={{ backgroundColor: '#fff', width: '100%', padding: 32, alignItems: 'center' }}>
                <Text style={{ textAlign: 'justify' }}>
                    Texto sobre o aplicativo arte publica. Texto sobre o aplicativo arte publica. Texto sobre o aplicativo arte publica.
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                    Texto sobre o aplicativo arte publica. Texto sobre o aplicativo arte publica. Texto sobre o aplicativo arte publica.
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                    Texto sobre o aplicativo arte publica. Texto sobre o aplicativo arte publica. Texto sobre o aplicativo arte publica.
                </Text>
            </View>
            <View style={{ backgroundColor: '#CC1964', width: '100%', padding: 32 }}>
                {colunas === 2 && (
                    <Grid>
                        <Row key={1}>
                            <Col
                                key={1}
                                style={[
                                    { flex: null, paddingLeft: restante / 2, alignItems: 'center' },
                                ]}
                            >
                                <Image
                                    source={require('@assets/stefano.png')}
                                    style={{ width: tamanhoImagem, height: tamanhoImagem, borderRadius: tamanhoImagem / 2 }}
                                />
                                <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>Aline Oliveira</Text>
                            </Col>
                            <Col
                                key={2}
                                style={[
                                    { flex: null, paddingLeft: 64, alignItems: 'center' },
                                ]}
                            >
                                <Image
                                    source={require('@assets/stefano.png')}
                                    style={{ width: tamanhoImagem, height: tamanhoImagem, borderRadius: tamanhoImagem / 2 }}
                                />
                                <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>Stéfano Bassan</Text>
                            </Col>
                        </Row>
                    </Grid>
                )}
                {colunas === 1 && (
                    <Grid style={{ flex: 1 }}>
                        <Row key={1} style={{ flex: 1 }}>
                            <Col
                                key={1}
                                style={[
                                    { flex: null, paddingLeft: (restante + 64) / 2, alignItems: 'center' },
                                ]}
                            >
                                <Image
                                    source={require('@assets/stefano.png')}
                                    style={{ width: tamanhoImagem, height: tamanhoImagem, borderRadius: tamanhoImagem / 2 }}
                                />
                                <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>Aline Oliveira</Text>
                            </Col>
                        </Row>
                        <Row key={2} style={{ flex: 1, paddingTop: 32 }}>
                            <Col
                                key={2}
                                style={[
                                    { flex: null, paddingLeft: (restante + 64) / 2, alignItems: 'center' },
                                ]}
                            >
                                <Image
                                    source={require('@assets/stefano.png')}
                                    style={{ width: tamanhoImagem, height: tamanhoImagem, borderRadius: tamanhoImagem / 2 }}
                                />
                                <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>Stéfano Bassan</Text>
                            </Col>
                        </Row>
                    </Grid>
                )}
            </View>
        </ScrollView>
    );
}

export default About;

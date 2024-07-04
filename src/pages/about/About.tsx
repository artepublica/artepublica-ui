import { Image, ScrollView, useWindowDimensions, View } from 'react-native';

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
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
            color: '#CC1964',
            paddingTop: 4,
            paddingLeft: 16,
          }}
        >
          Sobre
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          padding: 32,
          alignItems: 'center',
        }}
      >
        <Text style={{ textAlign: 'justify' }}>
          {'\t'}O Arte Pública é um aplicativo que propõe ampliar o conhecimento
          sobre a arte pública, disponibilizando dados sobre as obras em um
          acervo digital e contribuir com novas formas de tratamento de dados
          empíricos em pesquisas neste campo. Embora o termo arte pública faça
          referência a diferentes tipos de obras, a primeira etapa deste projeto
          disponibiliza informações acerca de 489 obras de arte tridimensionais
          de caráter permanente localizadas na cidade do Rio de Janeiro.
        </Text>
        <Text style={{ textAlign: 'justify' }}>
          {'\t'}Este aplicativo foi desenvolvido em parceria com o tecnologista
          Stéfano D’Ávila Bassan e é um desdobramento da pesquisa de doutorado
          de Aline Rayane de Souza Oliveira junto ao Grupo de Pesquisa
          Arquitetura, Cidade e Cultura do Laboratório de Análise Urbana e
          Representação Digital (LAURD), no Programa de Pós-graduação em
          Urbanismo (PROURB) da Faculdade de Arquitetura e Urbanismo da
          Universidade Federal do Rio de Janeiro, com bolsa concedida pelo
          Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq).
        </Text>
      </View>
      <View style={{ backgroundColor: '#CC1964', width: '100%', padding: 32 }}>
        {colunas === 2 && (
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: width - tamanhoGrid - restante / 2,
            }}
          >
            <View key={1} style={{ alignItems: 'center' }}>
              <Image
                source={require('@assets/Aline.jpg')}
                style={{
                  width: tamanhoImagem,
                  height: tamanhoImagem,
                  borderRadius: tamanhoImagem / 2,
                }}
              />
              <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>
                Aline Oliveira
              </Text>
            </View>
            <View key={1} style={{ alignItems: 'center', paddingLeft: 64 }}>
              <Image
                source={require('@assets/stefano.png')}
                style={{
                  width: tamanhoImagem,
                  height: tamanhoImagem,
                  borderRadius: tamanhoImagem / 2,
                }}
              />
              <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>
                Stéfano Bassan
              </Text>
            </View>
          </View>
        )}
        {colunas === 1 && (
          <View style={{ flexDirection: 'column' }}>
            <View key={1} style={{ alignItems: 'center' }}>
              <Image
                source={require('@assets/Aline.jpg')}
                style={{
                  width: tamanhoImagem,
                  height: tamanhoImagem,
                  borderRadius: tamanhoImagem / 2,
                }}
              />
              <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>
                Aline Oliveira
              </Text>
            </View>
            <View key={1} style={{ alignItems: 'center', paddingTop: 32 }}>
              <Image
                source={require('@assets/stefano.png')}
                style={{
                  width: tamanhoImagem,
                  height: tamanhoImagem,
                  borderRadius: tamanhoImagem / 2,
                }}
              />
              <Text style={{ color: '#fff', fontSize: 16, paddingTop: 16 }}>
                Stéfano Bassan
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default About;

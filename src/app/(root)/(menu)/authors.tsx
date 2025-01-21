import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { Tipo_GraficoRedeTipologiaObra } from '@pages';
import { autoresRecorte } from '@utils';

function Authors(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Autores</title>
      </Head>
      <View style={styles.container}>
        <Tipo_GraficoRedeTipologiaObra tipo='Autor' tipos={autoresRecorte} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default Authors;

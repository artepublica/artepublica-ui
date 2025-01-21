import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { Tipo_Mapa } from '@pages';
import { tipologiasRecorte } from '@utils';

export default function Mapa(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Mapa</title>
      </Head>
      <View style={styles.container}>
        <Tipo_Mapa tipos={tipologiasRecorte} tipo='Tipologia' />
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

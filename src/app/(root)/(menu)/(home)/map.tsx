import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { HeritageMap } from '@pages';
import { tipologiasRecorte } from '@utils';

export default function Mapa(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Mapa</title>
      </Head>
      <View style={styles.container}>
        <HeritageMap type='Tipologia' types={tipologiasRecorte} />
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

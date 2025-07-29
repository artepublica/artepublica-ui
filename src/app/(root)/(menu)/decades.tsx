import React, { JSX } from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { Decades as DecadesPage } from '@pages';

function Decades(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Décadas</title>
      </Head>
      <View style={styles.container}>
        <DecadesPage />
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

export default Decades;

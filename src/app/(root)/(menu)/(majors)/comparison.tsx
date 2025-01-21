import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { Prefeitos } from '@pages';
import { obrasRecorte } from '@utils';

function Comparison(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Comparação</title>
      </Head>
      <View style={styles.container}>
        <Prefeitos obras={obrasRecorte} />
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

export default Comparison;

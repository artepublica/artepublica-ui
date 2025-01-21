import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { ObrasRecorte } from '@pages';

export default function Listagem(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Listagem</title>
      </Head>
      <View style={styles.container}>
        <ObrasRecorte />
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

import React, { JSX } from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { heritages } from '@data';
import { Mayors } from '@pages';

function Comparison(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Comparação Mabdatos</title>
      </Head>
      <View style={styles.container}>
        <Mayors heritages={heritages} />
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

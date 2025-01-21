import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { HeritagePerDecade } from '@pages';

function Typology(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Tipologias</title>
      </Head>
      <View style={styles.container}>
        <HeritagePerDecade type='Tipologia' />
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

export default Typology;

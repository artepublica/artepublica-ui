import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { autoresRecorte } from '@data';
import { HeritageAuthorTypologyNetwork as HeritageAuthorTypologyNetworkPage } from '@pages';

function HeritageAuthorTypologyNetwork(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Autores</title>
      </Head>
      <View style={styles.container}>
        <HeritageAuthorTypologyNetworkPage
          type='Authors'
          types={autoresRecorte}
        />
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

export default HeritageAuthorTypologyNetwork;

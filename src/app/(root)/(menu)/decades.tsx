import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { Decade } from '@pages';

function Decades(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Décadas</title>
      </Head>
      <View style={styles.container}>
        <Decade />
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

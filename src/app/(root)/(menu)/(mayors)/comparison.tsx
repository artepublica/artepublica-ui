import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { Mayors } from '@pages';
import { thesisHeritages } from '@utils';

function Comparison(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Comparação</title>
      </Head>
      <View style={styles.container}>
        <Mayors heritages={thesisHeritages} />
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

import React, { JSX } from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { Glossary as GlossaryPage } from '@pages';

function Glossary(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Glossário</title>
      </Head>
      <View style={styles.container}>
        <GlossaryPage />
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

export default Glossary;

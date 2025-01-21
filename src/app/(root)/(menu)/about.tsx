import React from 'react';

import Head from 'expo-router/head';
import { StyleSheet, View } from 'react-native';

import { About as AboutPage } from '@pages';

function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>Arte Pública - Sobre</title>
      </Head>
      <View style={styles.container}>
        <AboutPage />
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

export default About;

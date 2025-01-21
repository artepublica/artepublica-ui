import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Button, Text } from '@base-components';

function NotFound(): JSX.Element {
  const router = useRouter();

  function goHome() {
    router.push('/(root)/(menu)/(home)/map');
  }

  return (
    <View style={styles.container}>
      <Text>404 not found</Text>
      <Button onPress={goHome}>go to home</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotFound;

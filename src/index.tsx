import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { App } from '@app';

function AppWithContext(): JSX.Element {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

export default AppWithContext;

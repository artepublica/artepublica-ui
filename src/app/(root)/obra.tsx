import { Platform, useWindowDimensions } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import NavigationModal from '../../base-components/modal/NavigationModal.wip';
import ObraView from '../../pages/obra/Obra';

export default function Layout(): JSX.Element {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  return NavigationModal({
    height,
    insets,
    Component: () => {
      return (
        <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
          <ObraView />
        </SafeAreaView>
      );
    },
    modalHeight: Platform.OS === 'web' ? 300 : 280,
    forceModal: true,
  });
}

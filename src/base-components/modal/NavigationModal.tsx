import { FunctionComponent } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, usePathname, useRouter } from 'expo-router';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { TipologiaTheme, useTheme } from '@utils';
import obrasRecorte from '@utils/analises/obrasRecorte';

import calculateNavigationModalHeight from './calculateNavigationModalHeight.wip';

type NavigationModalProps = {
  Component: FunctionComponent;
  modalHeight?: '25%' | '50%' | '75%' | '100%' | number;
  forceModal?: boolean;
  height: number;
  insets: EdgeInsets;
};

function WebModal({ Component }: NavigationModalProps): JSX.Element {
  return <Component />;
}

function MobileModal({
  height,
  insets,
  Component,
  modalHeight,
}: NavigationModalProps): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const { heritage: id } = useLocalSearchParams<{ heritage: string }>();

  const heritage = obrasRecorte.find(
    (heritage) => heritage.ID?.toString() === id,
  );

  let backgroundColor = theme.background;
  if (pathname === '/heritage') {
    backgroundColor =
      theme.tipologia[
        heritage?.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme
      ] ?? theme.tipologia.desconhecida;
  }
  function goBack(): void {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push({ pathname: '/(root)/(menu)/(home)/map' });
    }
  }
  return (
    <View style={style.safeView}>
      <View
        style={{
          backgroundColor: backgroundColor ?? theme.background,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <View
          style={{
            height: calculateNavigationModalHeight(height, insets, modalHeight),
            width: '100%',
          }}
        >
          <TouchableOpacity style={style.closeButton} onPress={goBack}>
            <Ionicons name='chevron-down' size={24} color='#FFF' on />
          </TouchableOpacity>
          <Component />
        </View>
      </View>
    </View>
  );
}

function NavigationModal({
  height,
  insets,
  Component,
  modalHeight,
  forceModal,
}: NavigationModalProps): JSX.Element {
  return Platform.OS !== 'web' || forceModal
    ? MobileModal({ height, insets, Component, modalHeight })
    : WebModal({ height, insets, Component });
}

export default NavigationModal;

const style = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  closeButton: {
    alignSelf: 'center',
    paddingTop: 8,
    cursor: 'pointer',
  },
});

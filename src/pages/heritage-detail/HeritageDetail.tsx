import { useLocalSearchParams } from 'expo-router';
import { Platform, View } from 'react-native';

import { Image, Text } from '@base-components';
import { TipologiaTheme, useTheme } from '@utils';
import obrasRecorte from '@utils/analises/obrasRecorte';
import { getYear } from '@utils/data/analisys_utils';

function HeritageDetail(): JSX.Element {
  const { theme } = useTheme();
  const { heritage: id } = useLocalSearchParams<{ heritage: string }>();

  const heritage = obrasRecorte.find(
    (heritage) => heritage.ID?.toString() === id,
  );

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        backgroundColor:
          theme.tipologia[
            heritage?.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme
          ] ?? theme.tipologia.desconhecida,
        height: '100%',
      }}
    >
      <View
        style={{
          height: '100%',
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              height: 136,
              width: 136,
              borderWidth:
                heritage?.Imagem != null && heritage.Imagem !== '' ? 0 : 1,
              borderColor: '#FFFFFF',
              marginBottom:
                heritage?.Imagem != null && heritage.Imagem !== '' ? 0 : 4,
            }}
          >
            <Image source={heritage?.Imagem} height={136} width={136} />
          </View>
        </View>
        <View style={{ padding: 8 }}>
          <Text
            style={{
              fontFamily: 'Arial',
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '700',
            }}
          >
            {`${heritage?.Titulo ?? 'Desconhecida'}${heritage?.DataInauguracao ? `, ${getYear(heritage.DataInauguracao)}` : ', s.d.'}${
              Platform.OS === 'web' ? '\n\n' : '\n'
            }`}
          </Text>
          <Text
            style={{
              fontFamily: 'Arial',
              fontSize: 15,
              color: '#FFFFFF',
              fontWeight: '400',
              lineHeight: 18,
            }}
          >
            {heritage?.Autores?.map((autor) => autor.Person?.Name).join(', ') ??
              'Desconhecida'}
          </Text>
          <Text
            style={{
              fontFamily: 'Arial',
              fontSize: 15,
              color: '#FFFFFF',
              fontWeight: '400',
              lineHeight: 18,
            }}
          >
            {`${heritage?.Material ?? 'Desconhecida'}${heritage?.MaterialBase ? `; ${heritage.MaterialBase}` : ''}`}
          </Text>
          {/* <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 18,
                        }}
                    >
                        {heritage.Endereco ?? ''}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 18,
                        }}
                    >
                        {heritage.Bairro ?? ''}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 18,
                        }}
                    >
                        {heritage.Status ?? ''}
                    </Text> */}
        </View>
      </View>
    </View>
  );
}

export default HeritageDetail;

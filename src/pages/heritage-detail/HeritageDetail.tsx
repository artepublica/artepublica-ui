import { useLocalSearchParams } from 'expo-router';
import { Platform, View } from 'react-native';

import { Image, Text } from '@base-components';
import { heritages } from '@data';
import { getYear, TypologyTheme, useTheme } from '@utils';

function HeritageDetail(): JSX.Element {
  const { theme } = useTheme();
  const { heritage: id } = useLocalSearchParams<{ heritage: string }>();

  const heritage = heritages.find((heritage) => heritage.ID.toString() === id);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        backgroundColor:
          theme.typology[heritage?.Typology?.toLocaleLowerCase() as keyof TypologyTheme] ?? theme.typology.desconhecida,
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
              borderWidth: heritage?.Image != null && heritage.Image !== '' ? 0 : 1,
              borderColor: '#FFFFFF',
              marginBottom: heritage?.Image != null && heritage.Image !== '' ? 0 : 4,
            }}
          >
            <Image source={heritage?.Image} height={136} width={136} />
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
            {`${heritage?.Title ?? 'Desconhecida'}${heritage?.OpeningDate ? `, ${getYear(heritage.OpeningDate)}` : ', s.d.'}${
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
            {heritage?.Authors?.map((author) => author.Person?.Name).join(', ') ?? 'Desconhecida'}
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
            {`${heritage?.Material ?? 'Desconhecida'}${heritage?.BaseMaterial ? `; ${heritage.BaseMaterial}` : ''}`}
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
                        {heritage.Address ?? ''}
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
                        {heritage.Neighborhood ?? ''}
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

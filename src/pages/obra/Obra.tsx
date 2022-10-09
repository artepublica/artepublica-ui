import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Text, Image } from '@base-components';
import { TipologiaTheme, useTheme } from '@utils';
import { getYear } from '@utils/data/analisys_utils';

import { RootNavigatorParamList } from '../../app/navigation/RootNavigator';

function ObraView(): JSX.Element {
    const { theme } = useTheme();

    const route = useRoute<RouteProp<RootNavigatorParamList, 'Obra'>>();
    const { obra } = route.params;

    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                backgroundColor: theme.tipologia[obra.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme],
                height: '100%',
            }}
        >
            <View
                style={{
                    width: 136,
                    height: '100%',
                }}
            >
                <View
                    style={{
                        backgroundColor: '#FFFFFF',
                        height: 136,
                        width: 136,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            height: 136,
                            width: 136,
                            borderWidth: obra.Imagem != null && obra.Imagem !== '' ? 0 : 1,
                            borderColor: theme.tipologia[obra.Tipologia?.toLocaleLowerCase() as keyof TipologiaTheme],
                            marginBottom: obra.Imagem != null && obra.Imagem !== '' ? 0 : 4,
                        }}
                    >
                        <Image source={obra.Imagem} height={136} width={136} />
                    </View>
                </View>
                <View style={{ padding: 8 }}>
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}>
                        {`${obra.Titulo ?? 'Desconhecida'}${obra.DataInauguracao ? `, ${getYear(obra.DataInauguracao)}` : ', s.d.'}\n\n`}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 11,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 13,
                        }}
                    >
                        {obra.Autores?.map((autor) => autor.Pessoa?.Nome).join(', ') ?? 'Desconhecida'}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 11,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 13,
                        }}
                    >
                        {`${obra.Material ?? 'Desconhecida'}${obra.MaterialBase ? `; ${obra.MaterialBase}` : ''}`}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 11,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 13,
                        }}
                    >
                        {obra.Endereco ?? ''}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 11,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 13,
                        }}
                    >
                        {obra.Bairro ?? ''}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 11,
                            color: '#FFFFFF',
                            fontWeight: '400',
                            lineHeight: 13,
                        }}
                    >
                        {obra.Status ?? ''}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default ObraView;

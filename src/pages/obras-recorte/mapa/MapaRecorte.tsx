import { View } from 'react-native';

import { Map, Text } from '@base-components';
import { obrasRecorte } from '@utils';

import styles from './styles';

function MapaRecorte(): JSX.Element {
    const style = styles();

    const comPosicao = obrasRecorte.filter((obra) => obra.Latitude != null && obra.Longitude != null);
    const semPosicao = obrasRecorte.filter((obra) => obra.Latitude == null || obra.Longitude == null);

    const markers = comPosicao.map((obra) => ({
        position: {
            latitude: obra.Latitude ?? '0',
            longitude: obra.Longitude ?? '0',
        },
        obra,
    }));
    return (
        <View style={style.container}>
            <Text>{`Com Posição: ${comPosicao.length}`}</Text>
            <Text>{`Sem Posição: ${semPosicao.length} ${semPosicao.map((obra) => obra.Titulo).join(', ')}`}</Text>
            <Map markers={markers} />
        </View>
    );
}

export default MapaRecorte;

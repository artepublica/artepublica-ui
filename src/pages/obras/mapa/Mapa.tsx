import { View } from 'react-native';

import { Map } from '@base-components';
import { obras } from '@utils';

import styles from './styles';

function MapAll(): JSX.Element {
    const style = styles();

    const markers = obras
        .filter((obra) => obra.Latitude != null && obra.Longitude != null)
        .map((obra) => ({
            position: {
                latitude: obra.Latitude ?? '0',
                longitude: obra.Longitude ?? '0',
            },
            obra,
        }));
    return (
        <View style={style.container}>
            <Map markers={markers} />
        </View>
    );
}

export default MapAll;

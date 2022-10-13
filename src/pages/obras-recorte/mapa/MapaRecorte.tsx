import { Map } from '@base-components';
import { obrasRecorte } from '@utils';

function MapaRecorte(): JSX.Element {
    const comPosicao = obrasRecorte.filter((obra) => obra.Latitude != null && obra.Longitude != null);

    const markers = comPosicao.map((obra) => ({
        position: {
            latitude: obra.Latitude ?? '0',
            longitude: obra.Longitude ?? '0',
        },
        obra,
    }));
    return <Map markers={markers} />;
}

export default MapaRecorte;

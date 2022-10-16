import { Map } from '@base-components';
import { obras } from '@utils';

function MapAll(): JSX.Element {
    const markers = obras
        .filter((obra) => obra.Latitude != null && obra.Longitude != null)
        .map((obra) => ({
            position: {
                latitude: obra.Latitude ?? '0',
                longitude: obra.Longitude ?? '0',
            },
            obra,
        }));
    return <Map markers={markers} />;
}

export default MapAll;

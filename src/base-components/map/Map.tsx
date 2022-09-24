import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { useWindowDimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type MapWrapperProps = {
    markers?: {
        position: { latitude: string; longitude: string };
        color?: string;
    }[];
};

function Map({ markers }: MapWrapperProps): JSX.Element {
    const { height } = useWindowDimensions();
    const bottomTabBarHeight = useBottomTabBarHeight();
    const headerHeight = useHeaderHeight();
    const center = {
        latitude: -22.910972,
        longitude: -43.17156,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
    };

    return (
        <MapView
            zoomControlEnabled
            zoomEnabled
            zoomTapEnabled
            initialRegion={center}
            testID="mapView"
            style={{ height: height - headerHeight - bottomTabBarHeight - 48 }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={[
                {
                    featureType: 'poi',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'transit',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
            ]}
        >
            {markers
                ?.filter((marker) => marker.position.latitude !== '' && marker.position.longitude !== '')
                .map((marker, index) => (
                    <Marker
                        pinColor={marker.color ?? 'red'}
                        key={index}
                        coordinate={{
                            latitude: parseFloat(marker.position.latitude),
                            longitude: parseFloat(marker.position.longitude),
                        }}
                    />
                ))}
        </MapView>
    );
}

export default Map;

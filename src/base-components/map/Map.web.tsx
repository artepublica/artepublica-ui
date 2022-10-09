import { useEffect, useRef, useState } from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { default as Constants } from 'expo-constants';

import { Obra } from '@domain';
import { magenta } from '@utils/theme-provider/themes/cores';
import { RootNavigatorParamList } from 'src/app/navigation/RootNavigator';

type MapWrapperProps = {
    markers?: {
        position: { latitude: string; longitude: string };
        color?: string;
        obra: Obra;
    }[];
};

function MapWrapper({ markers }: MapWrapperProps): JSX.Element {
    const center = { lat: -22.910972, lng: -43.17156 };
    const zoom = 12;

    return (
        <Wrapper apiKey={Constants.manifest?.extra?.googleMapsAPI}>
            <MyMapComponent center={center} zoom={zoom} markers={markers} />
        </Wrapper>
    );
}

function MyMapComponent({
    center,
    zoom,
    markers,
}: {
    center?: google.maps.LatLngLiteral;
    zoom?: number;
    markers?: {
        position: { latitude: string; longitude: string };
        color?: string;
        obra: Obra;
    }[];
}) {
    const navigation = useNavigation<NavigationProp<RootNavigatorParamList>>();
    const ref = useRef<HTMLDivElement>(null);
    const [
        map,
        setMap,
    ] = useState<google.maps.Map>();
    const [
        mapMarkers,
        serMapMarkers,
    ] = useState<google.maps.Marker[]>([]);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center,
                    zoom,
                    mapTypeId: 'roadmap',
                    styles: [
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
                    ],
                }),
            );
        }

        if (map && markers) {
            mapMarkers.forEach((marker) => marker.setMap(null));

            const markersI = markers.map((marker) => {
                const gMarker = new google.maps.Marker({
                    position: {
                        lat: parseFloat(marker.position.latitude),
                        lng: parseFloat(marker.position.longitude),
                    },
                    icon: {
                        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',

                        fillOpacity: 1,
                        strokeColor: '#000',
                        strokeWeight: 2,
                        scale: 1,
                        fillColor: marker.color ?? magenta,
                    },
                    clickable: true,
                });

                gMarker.addListener('click', () => {
                    navigation.navigate('Obra', { obra: marker.obra });
                });
                gMarker.setMap(map);
                return gMarker;
            });

            serMapMarkers(markersI);
        }
    }, [
        ref,
        map,
        markers,
    ]);

    return <div style={{ width: '100%', height: '100%' }} ref={ref} />;
}

export default MapWrapper;

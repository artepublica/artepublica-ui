import { useEffect, useRef, useState } from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';
import { default as Constants } from 'expo-constants';
import { useRouter } from 'expo-router';

import { Heritage } from '@domain';
import { magenta } from '@utils';

type MapWrapperProps = {
  markers?: {
    position: { latitude: string; longitude: string };
    color?: string;
    heritage: Heritage;
  }[];
};

function MapWrapper({ markers }: MapWrapperProps): JSX.Element {
  const center = { lat: -22.910972, lng: -43.17156 };
  const zoom = 12;

  return (
    <Wrapper apiKey={Constants.expoConfig?.extra?.googleMapsAPI}>
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
    heritage: Heritage;
  }[];
}) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const [mapMarkers, serMapMarkers] = useState<google.maps.Marker[]>([]);

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

      /*

        const iconContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0"
                  fill="${marker.color ?? magenta}" fill-opacity="1" stroke="#000" stroke-width="2" />
          </svg>
        `;
        */

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
          router.push({
            pathname: '/heritage',
            params: { heritage: marker.heritage.ID },
          });
        });
        gMarker.setMap(map);
        return gMarker;
      });

      serMapMarkers(markersI);
    }
  }, [ref, map, markers]);

  return <div style={{ width: '100%', height: '100%' }} ref={ref} />;
}

export default MapWrapper;

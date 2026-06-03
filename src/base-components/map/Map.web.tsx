/// <reference types="google.maps" />

import { JSX, useEffect, useRef, useState } from 'react';

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
    <Wrapper apiKey={Constants.expoConfig?.extra?.googleMapsAPI} libraries={['marker']}>
      <MyMapComponent center={center} zoom={zoom} markers={markers} />
    </Wrapper>
  );
}

function createPinContent(color: string): HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="44" viewBox="-12 -42 24 44">
      <path d="M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0"
            fill="${color}" fill-opacity="1" stroke="#000" stroke-width="2" />
    </svg>
  `;
  return container;
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
  const [mapMarkers, setMapMarkers] = useState<google.maps.marker.AdvancedMarkerElement[]>([]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
          mapId: Constants.expoConfig?.extra?.googleMapsMapId,
        }),
      );
    }

    if (map && markers) {
      mapMarkers.forEach((marker) => (marker.map = null));

      const markersI = markers.map((marker) => {
        const gMarker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: {
            lat: parseFloat(marker.position.latitude),
            lng: parseFloat(marker.position.longitude),
          },
          content: createPinContent(marker.color ?? magenta),
          gmpClickable: true,
        });

        gMarker.addListener('gmp-click', () => {
          router.push({
            pathname: '/heritage',
            params: { heritage: marker.heritage.ID },
          });
        });

        return gMarker;
      });

      setMapMarkers(markersI);
    }
  }, [ref, map, markers]);

  return <div style={{ width: '100%', height: '100%' }} ref={ref} />;
}

export default MapWrapper;

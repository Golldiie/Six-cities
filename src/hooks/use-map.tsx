import { useRef, useEffect, useState, MutableRefObject } from 'react';
import {Map, TileLayer} from 'leaflet';
import { City } from '../mocks/offers/offers-types';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom
      });

      setMap(instance);

      const layer = new TileLayer(
        'https://{s}://{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors &copy; <a href="https://carto.com">CARTO</a>',
        }
      );

      layer.addTo(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;

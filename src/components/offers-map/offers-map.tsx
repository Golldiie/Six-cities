import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer, City } from '../../mocks/offers/offers-types';

type OffersMapProps = {
  city: City;
  offers: Offer[];
  activeOfferId: string | null;
  className: string;
};

// Константы иконок с точными размерами HTML Academy
const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function OffersMap({ city, offers, activeOfferId, className}: OffersMapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && city) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}

export default OffersMap;

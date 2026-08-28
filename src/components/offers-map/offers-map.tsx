import { useRef, useEffect } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import { City, Offer } from '../../mocks/offers/offers-types';
import useMap from '../../hooks/use-map';

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

type MapProps = {
  offers: Offer[];
  city: City;
  activeOfferId: string | null;
};

function OffersMap({offers, city, activeOfferId}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const map = useMap(mapRef, city);
  useEffect(() => {
    if(map){
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  },
  [map, offers, activeOfferId]
  );
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default OffersMap;

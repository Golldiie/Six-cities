import { Offer } from '../../mocks/offers/offers-types';

type MapProps = {
  offers: Offer[];
  activeOfferId: string | null;
};

function OffersMap({ offers, activeOfferId }: MapProps): JSX.Element {
  return (
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  );
}

export default OffersMap;

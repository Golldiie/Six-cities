import { Offer } from '../../mocks/offers/offers-types';

type MapProps = {
  offers: Offer[];
  activeOfferId: string | null;
};
/* eslint-disable @typescript-eslint/no-unused-vars */
function OffersMap(_props: MapProps): JSX.Element {
  return (
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  );
}

export default OffersMap;

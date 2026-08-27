import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offers/offers-types';

type PlaceListProps = {
  offers: Offer[];
}

function PlacesList({offers}:PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
        />
      ))}
    </div>
  );
}

export default PlacesList;

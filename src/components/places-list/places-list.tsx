import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offers/offers-types';

type PlaceListProps = {
  offers: Offer[];
  onOfferHover: (id: string | null) => void;
}

function PlacesList({offers, onOfferHover}:PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          onMouseEnter={() => onOfferHover(offer.id)}
          onMouseLeave={() => onOfferHover(null)}
        />
      ))}
    </div>
  );
}

export default PlacesList;

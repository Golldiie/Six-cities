import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offers/offers-types';

type PlaceListProps = {
  offers: Offer[];
  className: string;
  cardType?: 'cities' | 'near-places';
  onOfferHover?: (id: string | null) => void;
}

function PlacesList({offers, className, cardType, onOfferHover}:PlaceListProps): JSX.Element {
  return (
    <div className={`${className}__places-list places__list tabs__content`}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          cardType={cardType}
          onMouseEnter={() => onOfferHover?.(offer.id)}
          onMouseLeave={() => onOfferHover?.(null)}
        />
      ))}
    </div>
  );
}

export default PlacesList;

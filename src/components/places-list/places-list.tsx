import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offers/offers-types';

type PlaceListProps = {
  offers: Offer[];
  className: string;
  cardType?: 'cities' | 'near-places';
  onOfferHover?: (id: string | null) => void;
}

function PlacesList({offers, className, cardType, onOfferHover}:PlaceListProps): JSX.Element {
  const listModifier = className === 'cities' ? 'places-list' : 'list';

  return (
    <div className={`${className}__${listModifier} places__list ${className === 'cities' ? 'tabs__content' : ''}`}>
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

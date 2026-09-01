import { Offer } from '../mocks/offers/offers-types';
import { SortOption } from '../const';

export const getSortedOffers = (offersList: Offer[], sortType: string) => {
  const sorted = [...offersList];
  switch (sortType) {
    case SortOption.LowToHigh:
      return sorted.sort((a, b) => a.price - b.price);
    case SortOption.TopRated:
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
};

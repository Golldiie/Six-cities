import { Review } from './reviews-types';

export const mockReviews: Review[] = [
  {
    id: 'rev-1',
    date: '2026-04-24', // Используем актуальные даты
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4
  }
];

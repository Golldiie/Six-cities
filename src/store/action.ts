import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../mocks/offers/offers-types';

export const cityChange = createAction<string>('main/cityChange');
export const offersLoad = createAction<Offer[]>('main/offersLoad');

import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../mocks/offers/offers-types';
import { cityChange, offersLoad } from './action';

const InitialState = {
  city: 'Paris',
  offers: [] as Offer[],
};

const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersLoad, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};

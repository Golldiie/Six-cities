import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../const';
import { Offer } from '../mocks/offers/offers-types';
import { mockOffers } from '../mocks/offers/offers';
import MainPage from '../pages/main-page/main-page';
import FavouritesPage from '../pages/favourites-page/favourites-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route/private-route';
import NotFoundPage from '../pages/not-found-page/not-found-page';

type AppProps = {
  offers: Offer[];
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={<MainPage offers={offers} />}
        />
        <Route
          path={AppRoute.LOGIN} element = {<LoginPage />}
        />
        <Route
          path={AppRoute.OFFER} element = {<OfferPage />}
        />
        <Route
          path={AppRoute.FAVORITES} element = {
            <PrivateRoute
              navigatePath={AppRoute.LOGIN}
              isNeedNavigate
            >
              <FavouritesPage offers={Array.isArray(mockOffers) ? mockOffers.filter((offer) => offer.isFavorite) : []} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

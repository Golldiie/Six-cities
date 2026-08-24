import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import MainPage from '../pages/main-page/main-page';
import FavouritesPage from '../pages/favourites-page/favourites-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route/private-route';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root} element= {<MainPage places={5} />}
        />
        <Route
          path={AppRoute.Login} element = {<LoginPage />}
        />
        <Route
          path={AppRoute.Offer} element = {<OfferPage />}
        />
        <Route
          path={AppRoute.Favorites} element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavouritesPage />
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

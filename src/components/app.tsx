import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../const';
import MainPage from '../pages/main-page/main-page';
import FavouritesPage from '../pages/favourites-page/favourites-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';

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
          path={AppRoute.Favorites} element = {<FavouritesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

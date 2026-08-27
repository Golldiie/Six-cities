import { Offer } from '../../mocks/offers/offers-types';
import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavouritesPageProps = {
  offers: Offer[];
};

function FavouritesPage({offers}: FavouritesPageProps): JSX.Element {
  const offersByCity = offers.reduce<Record<string, Offer[]>>((acc, offer) => {
    const city = offer.city.name;

    if (!acc[city]) {
      acc[city] = [];
    }

    acc[city].push(offer);

    return acc;
  }, {});
  return (
    <div className="page">
      <Header isSigned={false} favourites={3} isMainPage={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offersByCity).map(([city, cityOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>

                  <div className="favorites__places">
                    {cityOffers.map((offer) => (
                      <PlaceCard
                        key={offer.id}
                        {...offer}
                        cardType="favorites"
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavouritesPage;

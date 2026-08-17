import Header from '../header/header';
import PlaceCard from '../place-card/place-card';

function FavouritesPage(): JSX.Element {
  return (
    <div className="page">
      <Header isSigned favourites={3} isMainPage />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard
                    id="1"
                    title="Nice, cozy, warm big bed apartment"
                    type="Apartment"
                    price={180}
                    rating={5}
                    previewImage="img/apartment-small-03.jpg"
                    isPremium
                    isFavourite
                    cardType="favorites"
                  />

                  <PlaceCard
                    id="2"
                    title="Wood and stone place"
                    type="Room"
                    price={80}
                    rating={4}
                    previewImage="img/room-small.jpg"
                    isPremium={false}
                    isFavourite
                    cardType="favorites"
                  />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard
                    id="3"
                    title="White castle"
                    type="Apartment"
                    price={180}
                    rating={5}
                    previewImage="img/apartment-small-04.jpg"
                    isPremium={false}
                    isFavourite
                    cardType="favorites"
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavouritesPage;

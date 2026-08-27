import { useState } from 'react';
import { Offer } from '../../mocks/offers/offers-types';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import Sort from '../../components/sort/sort';
import OffersMap from '../../components/offers-map/offers-map';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({ offers }: MainPageProps): JSX.Element{
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  return (
    <div className="page page--gray page--main">
      <Header isSigned={false} favourites={3} isMainPage />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sort />
              <PlacesList
                offers={offers}
                onOfferHover={setActiveOfferId}
              />
            </section>

            <OffersMap
              offers={offers}
              activeOfferId={activeOfferId}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

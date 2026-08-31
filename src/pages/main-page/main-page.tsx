import { useState } from 'react';
import { Offer } from '../../mocks/offers/offers-types';
import { CITIES } from '../../const';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import Sort from '../../components/sort/sort';
import OffersMap from '../../components/offers-map/offers-map';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [currentCityName, setCurrentCityName] = useState<string>('Amsterdam');

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCityName);

  const currentCity = filteredOffers[0]?.city ?? offers[0]?.city;

  return (
    <div className="page page--gray page--main">
      <Header isSigned={false} favourites={3} isMainPage />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city}>
                  <button
                    className={`locations__item-link tabs__item ${city === currentCityName ? 'tabs__item--active' : ''}`}
                    type="button"
                    onClick={() => setCurrentCityName(city)}
                    style={{ background: 'none', border: 'none', font: 'inherit', cursor: 'pointer' }}
                  >
                    <span>{city}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              {/* Переменная amsterdamOffers заменена на filteredOffers и динамический текст */}
              <b className="places__found">{filteredOffers.length} places to stay in {currentCityName}</b>
              <Sort />
              <PlacesList
                offers={filteredOffers}
                className='cities'
                cardType='cities'
                onOfferHover={setActiveOfferId}
              />
            </section>
            <div className="cities__right-section">
              {/* Карта рендерится только если объект города успешно найден */}
              {currentCity && (
                <OffersMap
                  offers={filteredOffers}
                  city={currentCity}
                  activeOfferId={activeOfferId}
                  className='cities__map'
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

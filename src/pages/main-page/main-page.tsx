import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { SortOption } from '../../const';
import { getSortedOffers } from '../../utils/sort';
import { cityChange } from '../../store/action';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import PlacesList from '../../components/places-list/places-list';
import Sort from '../../components/sort/sort';
import OffersMap from '../../components/offers-map/offers-map';


function MainPage(): JSX.Element {
  const dispatch = useDispatch();

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const currentCityName = useSelector((state: RootState) => state.city);

  const offers = useSelector((state: RootState) => state.offers);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCityName);

  const [currentSortType, setCurrentSortType] = useState<string>(SortOption.Popular);
  const sortedOffers = useMemo(() =>
    getSortedOffers(filteredOffers, currentSortType),
  [filteredOffers, currentSortType]
  );

  const currentCity = filteredOffers[0]?.city ?? offers[0]?.city;

  return (
    <div className="page page--gray page--main">
      <Header isSigned={false} favourites={3} isMainPage />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              currentCityName={currentCityName}
              onCityClick={(city) => dispatch(cityChange(city))}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              {/* Переменная amsterdamOffers заменена на filteredOffers и динамический текст */}
              <b className="places__found">{filteredOffers.length} places to stay in {currentCityName}</b>
              <Sort
                currentSortType={currentSortType}
                onChangeSortType={setCurrentSortType}
              />
              <PlacesList
                offers={sortedOffers}
                className='cities'
                cardType='cities'
                onOfferHover={setActiveOfferId}
              />
            </section>
            <div className="cities__right-section">
              {/* Карта рендерится только если объект города успешно найден */}
              {currentCity && (
                <OffersMap
                  offers={sortedOffers}
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

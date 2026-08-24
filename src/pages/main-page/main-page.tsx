import PlaceCard from '../../components/place-card/place-card';
import Header from '../../components/header/header';


type MainPageProps = {
  places: number;
}

function MainPage({ places }: MainPageProps): JSX.Element{

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
              <b className="places__found">{places} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>{' '}
                <span className="places__sorting-type" tabIndex={0} >
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--closed">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCard
                  id = '1'
                  title = 'Beautiful & luxurious apartment at great location'
                  type = 'Apartment'
                  price = {120}
                  rating = {4}
                  previewImage = 'img/apartment-01.jpg'
                  isPremium
                  isFavourite = {false}
                />

                <PlaceCard
                  id = '2'
                  title = 'Wood and stone place'
                  type = 'Room'
                  price = {80}
                  rating = {4}
                  previewImage = 'img/room.jpg'
                  isPremium = {false}
                  isFavourite
                />

                <PlaceCard
                  id = '3'
                  title = 'Canal View Prinsengracht'
                  type = 'Apartment'
                  price = {132}
                  rating = {4}
                  previewImage = 'img/apartment-02.jpg'
                  isPremium = {false}
                  isFavourite = {false}
                />

                <PlaceCard
                  id = '4'
                  title = 'Nice, cozy, warm big bed apartment'
                  type = 'Apartment'
                  price = {180}
                  rating = {5}
                  previewImage = 'img/apartment-03.jpg'
                  isPremium
                  isFavourite = {false}
                />

                <PlaceCard
                  id = '5'
                  title = 'Wood and stone place'
                  type = 'Room'
                  price = {80}
                  rating = {4}
                  previewImage = 'img/room.jpg'
                  isPremium = {false}
                  isFavourite
                />
              </div>
            </section>

            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

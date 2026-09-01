import { CITIES } from '../../const';

type CitiesListProps = {
  currentCityName: string;
  onCityClick: (city: string) => void;
}

function CitiesList({currentCityName, onCityClick}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city}>
          <button
            className={`locations__item-link tabs__item ${city === currentCityName ? 'tabs__item--active' : ''}`}
            type="button"
            onClick={() => onCityClick(city)}
            style={{ background: 'none', border: 'none', font: 'inherit', cursor: 'pointer' }}
          >
            <span>{city}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;

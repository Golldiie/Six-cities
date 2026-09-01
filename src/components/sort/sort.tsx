import { useState } from 'react';
import { SortOption } from '../../const';

type SortTypeProps = {
  currentSortType: string;
  onChangeSortType: (sortType: string) => void;
}

function Sort({currentSortType, onChangeSortType}: SortTypeProps): JSX.Element {

  const [isOpened, setIsOpened] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpened(!isOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : 'places__options--closed'}`}>
        {Object.values(SortOption).map((option) => (
          <li
            key={option}
            className={`places__option ${option === currentSortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              onChangeSortType(option);
              setIsOpened(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;

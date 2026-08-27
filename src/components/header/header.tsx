import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type HeaderProps = {
  isSigned: boolean;
  favourites: number;
  isMainPage?: boolean;
  isLoginPage?: boolean;
}

function Header({isSigned, favourites, isMainPage = false, isLoginPage = false} : HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {isMainPage ? (
              <span className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </span>
            ) : (
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            )}
          </div>

          {!isLoginPage && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>

                    {isSigned ? (
                      <>
                        <span className="header__user-name user__name">
                          Oliver.conner@gmail.com
                        </span>
                        <span className="header__favorite-count">
                          {favourites}
                        </span>
                      </>
                    ) : (
                      <span className="header__login">Sign in</span>
                    )}
                  </Link>
                </li>

                {isSigned && (
                  <li className="header__nav-item">
                    <button className="header__nav-link button-reset" type="button">
                      <span className="header__signout">Sign out</span>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}


export default Header;

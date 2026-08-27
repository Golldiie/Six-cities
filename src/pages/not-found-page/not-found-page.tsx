import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element{
  return (
    <div className="page">
      <Header isSigned={false} favourites={3} isMainPage={false} />
      <h1>404. Page not found</h1>
      <Link to={AppRoute.ROOT}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;

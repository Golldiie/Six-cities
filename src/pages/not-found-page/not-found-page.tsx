import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element{
  return (
    <div className="page">
      <Header isSigned={false} favourites={3} isMainPage={false} />
      <h1>404. Page not found</h1>
      <a href="/">Вернуться на главную</a>
    </div>
  );
}

export default NotFoundPage;

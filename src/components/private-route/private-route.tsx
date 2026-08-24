import {Navigate} from 'react-router-dom';
import { AppRoute } from '../../const';


type PrivateRouteProps = {
  children: JSX.Element;
  isNeedNavigate: boolean;
  navigatePath: AppRoute;
}

function PrivateRoute({children, isNeedNavigate, navigatePath}:PrivateRouteProps): JSX.Element {

  return (
    isNeedNavigate ? <Navigate to={navigatePath} /> : children
  );
}

export default PrivateRoute;

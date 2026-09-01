import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';
import { mockOffers } from './mocks/offers/offers';
import { store } from './store';
import { offersLoad } from './store/action';
import 'leaflet/dist/leaflet.css';

store.dispatch(offersLoad(mockOffers));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

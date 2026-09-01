import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';
import { mockOffers } from './mocks/offers/offers';
import { store } from './store';
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App offers={mockOffers}/>
    </Provider>
  </React.StrictMode>
);

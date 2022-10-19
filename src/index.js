import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));

let persiststore=persistStore(store)

root.render(
    <Provider store={store}>
      <PersistGate persistor={persiststore}>
      <App />
      </PersistGate>
    </Provider>
);

reportWebVitals();

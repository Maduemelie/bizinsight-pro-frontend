import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import globalReducer from './state/index';
import authReducer from 'state/authslice';
import { Provider } from 'react-redux';
import { api } from 'state/api';
import { setupListeners } from '@reduxjs/toolkit/query';

import App from './App';

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  [api.reducerPath]: api.reducer 
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

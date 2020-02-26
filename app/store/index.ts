import {createStore, applyMiddleware, combineReducers, Reducer} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import middlewares from './middlewares';

import currentWeather from '../reducers/currentWeather';
import position from '../reducers/userPosition';
import geocode from '../reducers/locationGeocode';
import settings from '../reducers/settings';

const rootReducer = combineReducers({
  currentWeather,
  position,
  geocode,
  settings,
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  timeout: 10000,
  storage: AsyncStorage,
};

const persistedReducer: Reducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);

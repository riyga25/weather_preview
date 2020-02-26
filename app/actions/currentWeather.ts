import {Dispatch} from 'redux';
import {Forecast} from 'darkskyapi-ts';
import axios from '../services/api';
import {keys} from '../constants';
import {TState} from '../store/types';

export enum Action {
  PENDING = 'CURRENT_WEATHER_PENDING',
  FULFILLED = 'CURRENT_WEATHER_FULFILLED',
  REJECTED = 'CURRENT_WEATHER_REJECTED',
}

export const registerPending = () => ({
  type: Action.PENDING,
});

export const registerFulfilled = (data: Forecast) => ({
  type: Action.FULFILLED,
  payload: data,
});

export const registerRejected = () => ({
  type: Action.REJECTED,
});

export const getCurrentWeather = () => async (dispatch: Dispatch, getState: () => TState) => {
  try {
    const {
      position: {lat, lon},
      settings: {language},
    } = getState();
    await dispatch(registerPending());
    const data: Forecast = await axios.get(
      `forecast/${keys.WEATHER_KEY}/${lat},${lon}?units=si&lang=${language}`,
    );

    if (data) {
      await dispatch(registerFulfilled(data));
    } else {
      throw new Error('weather data is empty');
    }
  } catch (e) {
    // console.error(e);
    await dispatch(registerRejected());
  }
};

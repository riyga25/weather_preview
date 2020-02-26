import {Dispatch} from 'redux';
import {pathOr} from 'ramda';
import axios from '../services/api';
import {keys} from '../constants';
import {ICoords, IReducerAction, TState} from '../store/types';

export enum Action {
  PENDING = 'GEOCODE_PENDING',
  FULFILLED = 'GEOCODE_FULFILLED',
  REJECTED = 'GEOCODE_REJECTED',
}

export const registerPending = () => ({
  type: Action.PENDING,
});

export const registerFulfilled = (data: string) => ({
  type: Action.FULFILLED,
  payload: data,
});

export const registerRejected = (error: string) => {
  console.warn(error);
  return {
    type: Action.REJECTED,
  };
};

export const getGeocode = () => async (
  dispatch: Dispatch<IReducerAction>,
  getState: () => TState,
): Promise<void> => {
  try {
    await dispatch(registerPending());
    const {
      position: {lat, lon},
      settings: {language},
    } = getState();
    const {response} = await axios.get(
      `?geocode=${lon},${lat}&apikey=${keys.GEOCODER}&lang=${language}&format=json&kind=locality&results=1`,
      {
        baseURL: 'https://geocode-maps.yandex.ru/1.x/',
      },
    );

    if (response) {
      const data = pathOr(
        '',
        ['GeoObjectCollection', 'featureMember', 0, 'GeoObject', 'name'],
        response,
      );
      await dispatch(registerFulfilled(data));
    }
  } catch (e) {
    await dispatch(registerRejected(e));
  }
};

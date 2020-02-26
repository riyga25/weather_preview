import Geolocation from '@react-native-community/geolocation';
import {Dispatch} from 'redux';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {other} from '../constants';
import {ICoords} from '../store/types';

export enum Action {
  PENDING = 'POSITION_PENDING',
  FULFILLED = 'POSITION_FULFILLED',
  REJECTED = 'POSITION_REJECTED',
}

export const registerPending = () => ({
  type: Action.PENDING,
});

export const registerFulfilled = (data: ICoords) => ({
  type: Action.FULFILLED,
  payload: data,
});

export const registerRejected = (error: string) => ({
  type: Action.REJECTED,
  payload: error,
});

const location = other.isIOS
  ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const updateUserPosition = () => async (dispatch: Dispatch) => {
  await dispatch(registerPending());

  await new Promise((resolve, reject) => {
    const requestPosition = () =>
      Geolocation.getCurrentPosition(
        ({coords: {latitude: lat, longitude: lon}}) => {
          dispatch(registerFulfilled({lat, lon}));
          resolve();
        },
        error => {
          dispatch(registerRejected(error.message));
          reject();
        },
        {distanceFilter: 500},
      );

    const checkResult = (res: string) => {
      if (res === RESULTS.GRANTED) {
        requestPosition();
      } else if (res === RESULTS.DENIED) {
        req();
      } else if (res === RESULTS.UNAVAILABLE) {
        // prettier-ignore
        dispatch(registerRejected('Location check is not available on this device'));
        reject();
      } else if (res === RESULTS.BLOCKED) {
        // prettier-ignore
        dispatch(registerRejected('Application cannot check your location. Please change settings'));
        reject();
      }
    };

    const req = () => request(location).then(checkResult);

    check(location).then(checkResult);
  });
};

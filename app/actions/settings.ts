import {Dispatch} from 'redux';

export enum Action {
  FULFILLED = 'SETTINGS_UPDATED',
}

export const registerFulfilled = (data: object) => ({
  type: Action.FULFILLED,
  payload: data,
});

export const updateSettings = (setting: object) => async (dispatch: Dispatch) => {
  try {
    await dispatch(registerFulfilled(setting));
  } catch (e) {
    console.warn('Update settings', e);
  }
};

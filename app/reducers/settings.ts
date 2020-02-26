import {Action} from '../actions/settings';
import {IReducerAction, ISettingsState} from '../store/types';

const initialState: ISettingsState = {
  celsius: true, // C / F
  metres: true, // m / km
  hPa: true, // hPa / mmHg
  language: 'en',
};

const reducer = (state = initialState, action: IReducerAction): ISettingsState => {
  switch (action.type) {
    case Action.FULFILLED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

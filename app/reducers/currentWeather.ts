import {Action} from '../actions/currentWeather';
import {ICurrentWeatherState, IReducerAction} from '../store/types';

const initialState: ICurrentWeatherState = {
  isFetching: false,
  data: null,
};

const reducer = (
  state = initialState,
  action: IReducerAction,
): ICurrentWeatherState => {
  switch (action.type) {
    case Action.PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Action.FULFILLED: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    }
    case Action.REJECTED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;

import {Action} from '../actions/locationGeocode';
import {IGeocodeState, IReducerAction} from '../store/types';

const initialState: IGeocodeState = {
  isFetching: false,
  data: '',
};

const reducer = (state = initialState, action: IReducerAction): IGeocodeState => {
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

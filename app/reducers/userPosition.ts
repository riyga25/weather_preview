import {Action} from '../actions/userPosition';
import {IPositionState, IReducerAction} from '../store/types';

const initialState: IPositionState = {
  isFetching: false,
  lat: null,
  lon: null,
  error: '',
};

const reducer = (
  state = initialState,
  action: IReducerAction,
): IPositionState => {
  switch (action.type) {
    case Action.PENDING:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case Action.FULFILLED: {
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };
    }
    case Action.REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

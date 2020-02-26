import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: () => __DEV__,
});

export default [thunkMiddleware, loggerMiddleware];

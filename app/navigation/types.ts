import {routes} from '../constants';

export type RootStackParamList = {
  [routes.MAIN]: {headerRight: () => void; title: string};
  [routes.DAY_DETAIL]: {time: number};
  [routes.SETTINGS]: {title: string};
};

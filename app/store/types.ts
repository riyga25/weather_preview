import {Forecast} from 'darkskyapi-ts';

export type TState = Readonly<{
  readonly position: IPositionState;
  readonly currentWeather: ICurrentWeatherState;
  readonly geocode: IGeocodeState;
  readonly settings: ISettingsState;
}>;

export interface ICurrentWeatherState {
  isFetching: boolean;
  data: Forecast | null;
}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IPositionState {
  isFetching: boolean;
  lat: number | null;
  lon: number | null;
  error: string;
}

export interface IGeocodeState {
  isFetching: boolean;
  data: string;
}

export interface ISettingsState {
  celsius: boolean;
  metres: boolean;
  hPa: boolean;
  language: string;
}

export interface IReducerAction {
  type: string;
  payload?: any;
}

interface IGeoObject {
  GeoObject: {
    name: string;
    description: string;
  };
}

export interface IGeCollection {
  GeoObjectCollection: {
    featureMember: IGeoObject[];
  };
}

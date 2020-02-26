import {createSelector} from 'reselect';
import {Forecast} from 'darkskyapi-ts';
import {TState} from '../store/types';

type Coordinates = {
  lat: number | null;
  lon: number | null;
};

const data = (state: TState): any => state.currentWeather.data || {};
const currentWeatherFetching = (state: TState) => state.currentWeather.isFetching;
const geocodeData = (state: TState) => state.geocode.data;
const latitude = (state: TState) => state.position.lat;
const longitude = (state: TState) => state.position.lon;
const positionError = (state: TState) => state.position.error;
const language = (state: TState) => state.settings.language;
const celsius = (state: TState) => state.settings.celsius;
const hPa = (state: TState) => state.settings.hPa;
const metres = (state: TState) => state.settings.metres;

// weather selectors
export const allWeather = createSelector(data, (weather: Forecast) => weather);
export const currentWeather = createSelector(data, (weather: Forecast) => weather.currently!);
export const dailyWeather = createSelector(data, (weather: Forecast) => weather.daily!);
export const minutelyWeather = createSelector(data, (weather: Forecast) => weather.minutely!);
export const hourlyWeather = createSelector(data, (weather: Forecast) => weather.hourly!);
export const weatherFetching = createSelector(currentWeatherFetching, item => item);

// geocode selectors
export const geoCode = createSelector(geocodeData, (name: string) => name);

// user position
export const userPositionError = createSelector(positionError, (title: string) => title);
export const userPosition = createSelector(
  latitude,
  longitude,
  (lat, lon): Coordinates => ({
    lat,
    lon,
  }),
);

// settings
export const userLanguage = createSelector(language, (item: string) => item);
export const settingsCelsius = createSelector(celsius, (item: boolean) => item);
export const settingsHPa = createSelector(hPa, (item: boolean) => item);
export const settingsMetres = createSelector(metres, (item: boolean) => item);

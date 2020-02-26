import {useSelector, useDispatch} from 'react-redux';
import {
  CurrentlyDataPoint,
  MinutelyDataBlock,
  DailyDataBlock,
  HourlyDataBlock,
  Forecast,
} from 'darkskyapi-ts';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  allWeather,
  currentWeather,
  dailyWeather,
  geoCode,
  hourlyWeather,
  minutelyWeather,
  userPositionError,
  weatherFetching,
} from '../selectors';
import {updateUserPosition} from '../actions/userPosition';
import {getCurrentWeather} from '../actions/currentWeather';
import {getGeocode} from '../actions/locationGeocode';
import {useWidget} from './widget';

export const useWeather = () => {
  const weather: Forecast = useSelector(allWeather);
  const current: CurrentlyDataPoint = useSelector(currentWeather);
  const daily: DailyDataBlock = useSelector(dailyWeather);
  const minutely: MinutelyDataBlock = useSelector(minutelyWeather);
  const hourly: HourlyDataBlock = useSelector(hourlyWeather);

  return {
    current,
    daily,
    minutely,
    hourly,
    weather,
  };
};

export const useMainData = () => {
  const dispath = useDispatch();
  const navigation = useNavigation();
  // const {updateWidget} = useWidget();

  const place: string = useSelector(geoCode);
  const isFetching = useSelector(weatherFetching);
  const positionError = useSelector(userPositionError);

  const updateTitle = useCallback(() => {
    if (!place) {
      return;
    }

    navigation.setOptions({
      title: place,
    });
  }, [navigation, place]);

  const getMainData = useCallback(async () => {
    await dispath(updateUserPosition());
    await dispath(getCurrentWeather());
    await dispath(getGeocode());
    await updateTitle();
    // updateWidget();
  }, [dispath, updateTitle]);

  return {getMainData, isFetching, positionError};
};

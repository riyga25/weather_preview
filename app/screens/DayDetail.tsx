import React, {FC, memo} from 'react';
import {format, fromUnixTime} from 'date-fns';
import {useSelector} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {useLocale, usePressure, useTemperature} from '../hooks';
import AppBackground from '../components/Background';
import StaticText from '../components/StaticText';
import lng from '../localization';
import {dailyWeather} from '../selectors';

type ScreenNavigationProp = {
  route: RouteProp<RootStackParamList, 'Day'>;
  navigation: StackNavigationProp<RootStackParamList, 'Day'>;
};

const DayDetail: FC<ScreenNavigationProp> = memo(({route, navigation}) => {
  const {time} = route.params;
  const daily = useSelector(dailyWeather);
  const day = daily.data.find(item => item.time === time);

  if (time) {
    navigation.setOptions({
      title: format(fromUnixTime(time), 'dd MMMM', {locale: useLocale()}),
    });
  }

  return (
    <AppBackground>
      <StaticText title={day!.summary} />
      <StaticText title={lng.sunrise} value={format(fromUnixTime(day!.sunriseTime), 'HH:mm')} />
      <StaticText title={lng.sunset} value={format(fromUnixTime(day!.sunsetTime), 'HH:mm')} />
      <StaticText title={lng.ozone} value={day!.ozone} />
      <StaticText title={lng.UVIndex} value={day!.uvIndex} />
      <StaticText title={lng.pressure} value={usePressure(day!.pressure)} />
      <StaticText title={lng.dewPoint} value={useTemperature(day!.dewPoint)} />
      <StaticText title={lng.visibility} value={`${Math.floor(day!.visibility)} ${lng.km}`} />
      <StaticText title={lng.cloudCover} value={`${Math.ceil(day!.cloudCover * 100)}%`} />
      {day!.precipProbability && (
        <StaticText
          title={`${lng.chanceOf} ${day!.precipType}:`}
          value={`${Math.ceil(day!.precipProbability * 100)}%`}
        />
      )}
    </AppBackground>
  );
});

export default DayDetail;

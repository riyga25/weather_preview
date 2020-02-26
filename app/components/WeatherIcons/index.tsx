/* eslint-disable react/jsx-props-no-spreading */
import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {WeatherIcon as WeatherIcons} from 'darkskyapi-ts';

import ClearDay from './Clear_day';
import ClearNight from './Clear_night';
import Cloudy from './Cloudy';
import Fog from './Fog';
import PartlyCloudyDay from './Partly_cloudy_day';
import PartlyCloudyNight from './Partly_cloudy_night';
import Rain from './Rain';
import Sleet from './Sleet';
import Snow from './Snow';
import Wind from './Wind';

export type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

type Props = IconProps & {name: WeatherIcons};

const WeatherIcon: FC<Props> = memo(({name, width, height, color}) => {
  const params = {width, height, color};

  if (name === 'rain') {
    return <Rain {...params} />;
  }
  if (name === 'clear-day') {
    return <ClearDay {...params} />;
  }
  if (name === 'clear-night') {
    return <ClearNight {...params} />;
  }
  if (name === 'cloudy') {
    return <Cloudy {...params} />;
  }
  if (name === 'fog') {
    return <Fog {...params} />;
  }
  if (name === 'partly-cloudy-day') {
    return <PartlyCloudyDay {...params} />;
  }
  if (name === 'partly-cloudy-night') {
    return <PartlyCloudyNight {...params} />;
  }
  if (name === 'sleet') {
    return <Sleet {...params} />;
  }
  if (name === 'snow') {
    return <Snow {...params} />;
  }
  if (name === 'wind') {
    return <Wind {...params} />;
  }
  return <View />;
});

export default WeatherIcon;

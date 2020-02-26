/* eslint-disable react/jsx-props-no-spreading */
import React, {FC, memo} from 'react';
import {View} from 'react-native';

import Settings from './Settings';
import Sun from './Sun';
import Wind from './Wind';
import Pressure from './Pressure';
import Drops from './Drops';

export type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export enum Icons {
  SETTINGS = 'settings',
  SUN = 'sun',
  WIND = 'wind',
  PRESSURE = 'pressure',
  DROPS = 'drops',
}

type Props = IconProps & {name: Icons};

const AppIcons: FC<Props> = memo(({name, width, height, color}) => {
  const params = {width, height, color};

  if (name === 'settings') {
    return <Settings {...params} />;
  }
  if (name === 'sun') {
    return <Sun {...params} />;
  }
  if (name === 'wind') {
    return <Wind {...params} />;
  }
  if (name === 'pressure') {
    return <Pressure {...params} />;
  }
  if (name === 'drops') {
    return <Drops {...params} />;
  }
  return <View />;
});

export default AppIcons;

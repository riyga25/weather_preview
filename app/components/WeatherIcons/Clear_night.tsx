import React, {FC, memo} from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from './index';

const ClearNight: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path
      d="M42 28.77a21.18 21.18 0 01-11.76 3.57C18.55 32.41 9.1 22.82 9.1 10.99 9.1 7 10.22 3.22 12.11 0A22.1 22.1 0 000 19.81C0 32.06 9.8 42 21.91 42c8.96 0 16.66-5.46 20.09-13.23z"
      fill="url(#paint0_linear)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="42"
        y1="21"
        x2="0"
        y2="21"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFEE9" />
        <Stop offset=".51" stopColor="#FFF4B3" />
        <Stop offset="1" stopColor="#FFEB7E" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default ClearNight;

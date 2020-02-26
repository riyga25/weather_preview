import React, {FC, memo} from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from './index';

const PartlyCloudyDay: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path opacity=".2" d="M30.1 29.8a11.9 11.9 0 100-23.8 11.9 11.9 0 000 23.8z" fill="#FFF991" />
    <Path d="M30.1 25.97a8.07 8.07 0 100-16.14 8.07 8.07 0 000 16.14z" fill="url(#paint0_linear)" />
    <Path
      d="M31.58 23.18a5.32 5.32 0 00-5.26-4.12c-1.26 0-2.42.43-3.34 1.14a9.52 9.52 0 00-8.5-5.1 9.37 9.37 0 00-9.41 7.96A6.32 6.32 0 000 29.16a6.39 6.39 0 006.49 6.24h23.2a6.39 6.39 0 006.5-6.24c0-2.81-1.96-5.2-4.61-5.98z"
      fill="url(#paint1_linear)"
    />
    <Path
      d="M8.35 20.33a7.52 7.52 0 016.1-3.26c.57-.01.58-.91 0-.9a8.47 8.47 0 00-6.88 3.7c-.33.48.45.93.78.46zM2.1 29.49a4.9 4.9 0 012.3-4.08c.48-.31.03-1.1-.46-.78a5.82 5.82 0 00-2.74 4.85c-.02.59.89.59.9 0z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="25.95"
        y1="11.26"
        x2="32.87"
        y2="23.71"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF991" />
        <Stop offset=".02" stopColor="#FFF991" />
        <Stop offset="1" stopColor="#FFA41B" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear"
        x1="23.45"
        y1="15.1"
        x2="23.45"
        y2="28.75"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default PartlyCloudyDay;

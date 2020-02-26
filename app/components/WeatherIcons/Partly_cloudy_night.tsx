import React, {FC, memo} from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from './index';

const PartlyCloudyNight: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path
      d="M42 17.07a8.64 8.64 0 01-4.85 1.5c-4.83.03-8.72-4-8.72-8.96 0-1.67.46-3.26 1.24-4.61a9.3 9.3 0 00-5 8.31c0 5.14 4.04 9.3 9.04 9.3 3.7 0 6.87-2.28 8.29-5.54z"
      fill="url(#paint0_linear)"
    />
    <Path
      d="M32.57 22.28a5.58 5.58 0 00-8.87-3.13 9.8 9.8 0 00-8.77-5.34 9.71 9.71 0 00-9.7 8.35A6.6 6.6 0 000 28.55c0 3.6 3.01 6.55 6.7 6.55h23.93c3.68 0 6.7-2.95 6.7-6.55a6.6 6.6 0 00-4.76-6.27z"
      fill="url(#paint1_linear)"
    />
    <Path
      d="M8.62 19.3a7.72 7.72 0 016.28-3.42c.6-.02.6-.96 0-.94a8.7 8.7 0 00-7.09 3.87c-.34.5.46.98.8.48zM2.17 28.9c.04-1.78.9-3.32 2.37-4.28.5-.32.03-1.14-.47-.82a6.13 6.13 0 00-2.83 5.1c-.02.6.91.6.93 0z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="42"
        y1="13.81"
        x2="24.67"
        y2="13.81"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFEE9" />
        <Stop offset=".51" stopColor="#FFF4B3" />
        <Stop offset="1" stopColor="#FFEB7E" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear"
        x1="24.19"
        y1="13.81"
        x2="24.19"
        y2="28.13"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default PartlyCloudyNight;

import React, {FC, memo} from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from './index';

const Cloudy: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path
      d="M38.6 14.63a4.04 4.04 0 00-3.88-3.38c-.94 0-1.8.35-2.47.93A6.98 6.98 0 0025.96 8c-3.56 0-6.5 2.85-6.94 6.53a5.08 5.08 0 00-3.75 5c0 2.82 2.16 5.12 4.8 5.12H37.2c2.63 0 4.79-2.3 4.79-5.12 0-2.3-1.44-4.26-3.4-4.9z"
      fill="url(#paint0_linear)"
    />
    <Path
      d="M21.44 12.29a5.43 5.43 0 014.5-2.67c.43-.01.43-.75 0-.74a6.12 6.12 0 00-5.07 3.04c-.25.39.33.76.57.37zM16.82 19.8c.04-1.39.65-2.6 1.7-3.34.36-.26.03-.9-.33-.64a4.91 4.91 0 00-2.03 3.98c-.01.48.65.48.66 0z"
      fill="#fff"
    />
    <Path
      d="M29.14 24.7a5.07 5.07 0 00-4.85-4.29 4.7 4.7 0 00-3.09 1.18 8.71 8.71 0 00-7.84-5.3c-4.46 0-8.13 3.61-8.68 8.28C2 25.22 0 27.82 0 30.9c0 3.58 2.7 6.5 5.99 6.5H27.4c3.3 0 5.99-2.92 5.99-6.5 0-2.91-1.8-5.4-4.25-6.2z"
      fill="url(#paint1_linear)"
    />
    <Path
      d="M7.71 21.94a6.78 6.78 0 015.63-3.33c.53-.02.53-.94 0-.93a7.65 7.65 0 00-6.35 3.8c-.3.48.42.95.72.46zM1.94 31.34c.04-1.74.8-3.25 2.12-4.19.45-.31.03-1.12-.42-.8a6.14 6.14 0 00-2.53 4.98c-.02.6.82.6.83 0z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="32.59"
        y1="8"
        x2="32.59"
        y2="19.2"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear"
        x1="21.64"
        y1="16.29"
        x2="21.64"
        y2="30.49"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default Cloudy;

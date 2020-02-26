import React, {FC, memo} from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from './index';

const Wind: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path
      d="M34.01 12.44c-4.4 0-7.99 3.31-7.99 7.39 0 .45.4.82.89.82s.89-.37.89-.82c0-3.17 2.79-5.75 6.21-5.75 3.43 0 6.21 2.58 6.21 5.75s-2.78 5.75-6.2 5.75H2.04c-.49 0-.88.36-.88.82 0 .45.4.82.88.82h31.96c4.4 0 7.99-3.32 7.99-7.4 0-4.07-3.58-7.38-7.99-7.38z"
      fill="#BAE4F7"
    />
    <Path
      d="M17.14 10.8c-3.42 0-6.2 2.57-6.2 5.74 0 .46.39.82.88.82s.89-.36.89-.82c0-2.26 1.99-4.1 4.43-4.1 2.45 0 4.44 1.84 4.44 4.1 0 2.27-1.99 4.1-4.43 4.1H2.04c-.49 0-.88.38-.88.83 0 .45.4.82.88.82h15.1c3.42 0 6.2-2.58 6.2-5.75s-2.78-5.75-6.2-5.75zM32.24 30.5H2.05c-.49 0-.88.37-.88.82 0 .46.4.83.88.83h30.19c2.44 0 4.43 1.84 4.43 4.1 0 2.27-1.99 4.1-4.43 4.1-2.45 0-4.44-1.83-4.44-4.1 0-.45-.4-.82-.89-.82-.5 0-.89.37-.89.82 0 3.17 2.79 5.75 6.22 5.75 3.42 0 6.2-2.58 6.2-5.75s-2.78-5.75-6.2-5.75z"
      fill="#BAE4F7"
    />
    <Path
      d="M37.44 3.87A2.57 2.57 0 0034.9 1.9c-.61 0-1.18.2-1.62.54A4.61 4.61 0 0029.17 0a4.52 4.52 0 00-4.55 3.81c-1.4.3-2.45 1.5-2.45 2.91a3.08 3.08 0 003.13 3h11.23a3.07 3.07 0 003.14-3c0-1.34-.95-2.48-2.23-2.85z"
      fill="url(#paint0_linear)"
    />
    <Path
      d="M8.15 8.62a1.38 1.38 0 00-2.22-.79 2.45 2.45 0 00-4.62.76C.56 8.76 0 9.42 0 10.21c0 .92.75 1.66 1.67 1.66h5.99c.92 0 1.67-.74 1.67-1.66 0-.74-.5-1.38-1.18-1.59z"
      fill="url(#paint1_linear)"
    />
    <Path
      d="M20.68 33.88a1.71 1.71 0 00-1.7-1.31c-.4 0-.78.13-1.07.36a3.07 3.07 0 00-2.74-1.63 3.01 3.01 0 00-3.04 2.54c-.93.2-1.63 1-1.63 1.94 0 1.1.94 2 2.1 2h7.47c1.16 0 2.1-.9 2.1-2 0-.9-.63-1.65-1.49-1.9z"
      fill="url(#paint2_linear)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="33.51"
        y1="0"
        x2="33.51"
        y2="6.53"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear"
        x1="6.05"
        y1="6.48"
        x2="6.05"
        y2="10.1"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear"
        x1="18.06"
        y1="31.3"
        x2="18.06"
        y2="35.66"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default Wind;

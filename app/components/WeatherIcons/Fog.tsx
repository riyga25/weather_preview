import React, {FC, memo} from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from './index';

const Fog: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path
      d="M19 37.63H8.69c-.57 0-1.03-.48-1.03-1.09 0-.6.46-1.09 1.03-1.09h7.73c1.42 0 2.58-1.22 2.58-2.73 0-1.5-1.16-2.72-2.58-2.72h-9.8c-.56 0-1.02-.5-1.02-1.1 0-.6.46-1.09 1.03-1.09h4.64v-1.09H6.63c-1.14 0-2.06.98-2.06 2.18 0 1.2.92 2.19 2.06 2.19h9.79c.85 0 1.55.73 1.55 1.63 0 .9-.7 1.64-1.55 1.64H8.69c-1.14 0-2.06.98-2.06 2.18 0 1.2.92 2.19 2.06 2.19h10.3c.58 0 1.04.49 1.04 1.09 0 .6-.46 1.09-1.03 1.09h-2.58V42H19c1.13 0 2.06-.98 2.06-2.18 0-1.2-.93-2.19-2.06-2.19z"
      fill="#BAE4F7"
    />
    <Path
      d="M6.63 40.9h8.76V42H6.63v-1.1zM4.57 40.9H5.6V42H4.57v-1.1zM12.3 26.72h4.64v1.1H12.3v-1.1zM34.46 28.9H20.54V30h13.92c.57 0 1.03.49 1.03 1.09 0 .6-.46 1.09-1.03 1.09h-6.7v1.09h6.7c1.14 0 2.06-.98 2.06-2.18 0-1.2-.92-2.19-2.06-2.19zM35.5 40.9h1.02V42H35.5v-1.1zM34.72 34.9H20.54V36h14.18c.42 0 .77.37.77.82 0 .45-.35.81-.77.81h-6.45c-1.13 0-2.06.98-2.06 2.19 0 1.2.93 2.18 2.06 2.18h6.19v-1.1h-6.19c-.56 0-1.03-.48-1.03-1.08 0-.6.47-1.1 1.03-1.1h6.45c1 0 1.8-.85 1.8-1.9 0-1.06-.8-1.91-1.8-1.91z"
      fill="#BAE4F7"
    />
    <Path d="M25.7 32.18h1.03v1.09H25.7v-1.1z" fill="#BAE4F7" />
    <Path
      d="M36.65 9.8a6.24 6.24 0 00-9.98-3.62A11 11 0 005.88 9.66a7.58 7.58 0 001.65 14.97h26.94A7.58 7.58 0 0042 17.05c0-3.4-2.27-6.3-5.35-7.25z"
      fill="url(#paint0_linear)"
    />
    <Path
      d="M9.7 6.34a8.63 8.63 0 017.07-3.95c.67-.01.67-1.1 0-1.09A9.73 9.73 0 008.79 5.8c-.38.58.52 1.12.9.55zM2.44 17.45a6 6 0 012.67-4.94c.56-.38.04-1.33-.53-.95a7.14 7.14 0 00-3.18 5.9c-.02.7 1.02.7 1.04 0z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="27.22"
        y1="0"
        x2="27.22"
        y2="16.56"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default Fog;

import React, {FC, memo} from 'react';
import {Svg, Path, Defs, Stop, LinearGradient} from 'react-native-svg';
import {IconProps} from './index';

const Rain: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path
      d="M10.94 22.36l4.06 6.3c.48.72 1.68.04 1.2-.7l-4.06-6.28c-.48-.74-1.69-.06-1.2.68zM20.01 24.1l4.07 6.28c.48.74 1.67.05 1.2-.68l-4.07-6.3c-.48-.73-1.67-.05-1.2.7zM17.74 33.66l4.06 6.29c.48.74 1.68.05 1.2-.69l-4.06-6.28c-.48-.74-1.68-.06-1.2.68zM9.45 30.76l4.06 6.29c.48.73 1.68.05 1.2-.69l-4.07-6.28c-.47-.74-1.68-.06-1.2.68zM26.82 35.4l4.06 6.28c.48.74 1.68.06 1.2-.68l-4.06-6.29c-.48-.74-1.68-.06-1.2.69zM28.85 26.47l4.06 6.3c.48.73 1.68.05 1.2-.7l-4.06-6.28c-.48-.74-1.68-.06-1.2.68z"
      fill="#BAE4F7"
    />
    <Path
      d="M36.65 9.2a6.15 6.15 0 00-6.1-4.69c-1.46 0-2.81.49-3.88 1.29A11.08 11.08 0 0016.8 0C11.2 0 6.58 3.95 5.88 9.06 2.53 9.78 0 12.62 0 16c0 3.9 3.39 7.1 7.53 7.1h26.94c4.14 0 7.53-3.2 7.53-7.1 0-3.2-2.27-5.91-5.35-6.8z"
      fill="url(#paint0_linear)"
    />
    <Path
      d="M9.7 5.95a8.77 8.77 0 017.07-3.7c.67-.02.67-1.05 0-1.03a9.89 9.89 0 00-7.98 4.21c-.38.54.52 1.06.9.52zM2.44 16.38c.05-1.93 1-3.6 2.67-4.65.56-.35.04-1.24-.53-.88a6.6 6.6 0 00-3.18 5.52c-.02.67 1.02.67 1.04 0z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="27.22"
        y1="0"
        x2="27.22"
        y2="15.54"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#B9E4F6" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default Rain;

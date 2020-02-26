import React, {FC, memo} from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from './index';

const ClearDay: FC<IconProps> = memo(({width = 22, height = 22}) => (
  <Svg viewBox="0 0 42 42" width={width} height={height}>
    <Path opacity=".2" d="M21 42a21 21 0 100-42 21 21 0 000 42z" fill="#FFF991" />
    <Path d="M21 35.25a14.25 14.25 0 100-28.5 14.25 14.25 0 000 28.5z" fill="url(#paint0_linear)" />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="13.67"
        y1="9.28"
        x2="25.88"
        y2="31.26"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF991" />
        <Stop offset=".02" stopColor="#FFF991" />
        <Stop offset="1" stopColor="#FFA41B" />
      </LinearGradient>
    </Defs>
  </Svg>
));

export default ClearDay;

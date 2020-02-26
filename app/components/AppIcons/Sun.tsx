import React, {FC, memo} from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from './index';
import {colors} from '../../constants';

const Sun: FC<IconProps> = memo(({width = 22, height = 22, color = colors.text_1}) => (
  <Svg width={width} height={height} fill={color}>
    <Path
      d="M10 15a5 5 0 110-10 5 5 0 010 10zm0-15a1 1 0 011 1v2a1 1 0 01-2 0V1a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM1 9h2a1 1 0 010 2H1a1 1 0 010-2zm16 0h2a1 1 0 110 2h-2a1 1 0 010-2zm.07-6.07a1 1 0 010 1.41l-1.41 1.42a1 1 0 11-1.42-1.42l1.42-1.41a1 1 0 011.41 0zM5.76 14.24a1 1 0 010 1.42l-1.42 1.41a1 1 0 11-1.41-1.41l1.41-1.42a1 1 0 011.42 0zM4.34 2.93l1.42 1.41a1 1 0 01-1.42 1.42L2.93 4.34a1 1 0 011.41-1.41zm11.32 11.31l1.41 1.42a1 1 0 01-1.41 1.41l-1.42-1.41a1 1 0 111.42-1.42z"
      fill={color}
    />
  </Svg>
));

export default Sun;

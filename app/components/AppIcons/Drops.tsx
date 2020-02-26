import React, {FC, memo} from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from './index';
import {colors} from '../../constants';

const Drops: FC<IconProps> = memo(({width = 22, height = 22, color = colors.text_1}) => (
  <Svg width={width} height={height} fill={color}>
    <Path
      d="M6.67 0S0 10.25 0 13.75 2.93 20 6.67 20c3.73 0 6.66-2.75 6.66-6.25S6.67 0 6.67 0zm1.2 18.63l-.27-1.25a4.1 4.1 0 003.2-4c0-.38-.13-1.38-1.07-3.26l1.2-.5A9.8 9.8 0 0112 13.38c0 2.5-1.73 4.74-4.13 5.24zM16.67 10.67s-3.34 4.78-3.34 6.41c0 1.64 1.47 2.92 3.34 2.92 1.86 0 3.33-1.28 3.33-2.92 0-1.63-3.33-6.41-3.33-6.41zm.6 8.69l-.14-.59c.94-.17 1.6-.99 1.6-1.86 0-.18-.06-.64-.53-1.52l.6-.23c.4.81.53 1.4.53 1.75 0 1.16-.86 2.21-2.06 2.45z"
      fill={color}
    />
  </Svg>
));

export default Drops;

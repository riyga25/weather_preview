import React, {FC, memo} from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from './index';
import {colors} from '../../constants';

const Wind: FC<IconProps> = memo(({width = 22, height = 22, color = colors.text_1}) => (
  <Svg width={width} height={height} fill={color}>
    <Path
      d="M16.09 1.8c-2.16 0-3.92 2.12-3.92 4.73 0 .29.2.52.44.52s.43-.23.43-.52c0-2.03 1.37-3.69 3.05-3.69 1.67 0 3.04 1.66 3.04 3.69 0 2.03-1.37 3.68-3.04 3.68H.43c-.24 0-.43.24-.43.53 0 .29.2.53.43.53H16.1c2.15 0 3.91-2.13 3.91-4.74 0-2.61-1.76-4.74-3.91-4.74z"
      fill="#fff"
    />
    <Path
      d="M7.83.74c-1.68 0-3.05 1.65-3.05 3.68 0 .3.2.53.44.53s.43-.24.43-.53c0-1.45.98-2.63 2.18-2.63C9.03 1.8 10 2.97 10 4.42s-.98 2.63-2.17 2.63H.43c-.24 0-.43.24-.43.53 0 .3.2.53.43.53h7.4c1.67 0 3.04-1.66 3.04-3.69C10.87 2.4 9.5.74 7.83.74zM15.22 13.37H.43c-.24 0-.43.24-.43.53 0 .29.2.52.43.52h14.79c1.2 0 2.17 1.18 2.17 2.63 0 1.46-.97 2.64-2.17 2.64s-2.18-1.18-2.18-2.64c0-.29-.2-.52-.43-.52-.24 0-.44.23-.44.52 0 2.04 1.37 3.69 3.05 3.69 1.68 0 3.04-1.65 3.04-3.69 0-2.03-1.36-3.68-3.04-3.68z"
      fill="#fff"
    />
  </Svg>
));

export default Wind;

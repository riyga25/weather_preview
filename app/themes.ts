import {ReactText} from 'react';
import {TextStyle} from 'react-native';
import {colors, fonts} from './constants';

export type Theme = {
  theme: 'light' | 'dark';
  primaryText: TextStyle;
  secondaryText: TextStyle;
  secondaryColor: string;
  gradient: ReactText[];
};

export const lightTheme: Theme = {
  theme: 'light',
  primaryText: {
    ...fonts.regular,
    color: colors.text_1,
  },
  secondaryText: {
    ...fonts.regular,
    color: colors.text_3,
  },
  secondaryColor: colors.text_3,
  gradient: colors.gradient_light,
};

export const darkTheme: Theme = {
  theme: 'dark',
  primaryText: {
    ...fonts.regular,
    color: colors.text_1,
  },
  secondaryText: {
    ...fonts.regular,
    color: colors.text_4,
  },
  secondaryColor: colors.text_4,
  gradient: colors.gradient_dark,
};

import React, {FC, memo} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {images} from '../constants';

type Props = {
  name?: 'light' | 'dark';
};

const MainImage: FC<Props> = memo(({name}) => {
  return name === 'dark' ? (
    <ImageBackground style={styles.image} source={images.MAIN_CLOUDY_DARK} />
  ) : (
    <ImageBackground style={styles.image} source={images.MAIN_CLOUDY_LIGHT} />
  );
});

const styles: any = StyleSheet.create({
  image: {
    height: 275,
    width: 286,
  },
});

export default MainImage;

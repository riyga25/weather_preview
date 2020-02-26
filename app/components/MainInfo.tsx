import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CapitalizeFirstLetter} from '../helpers/CapitalizeFirstLetter';
import {colors} from '../constants';
import WeatherIcon from './WeatherIcons';
import {useTemperature, useTheme, useWeather} from '../hooks';
import MainImage from './MainImage';
import lng from '../localization';

const MainInfo: FC = memo(() => {
  const theme = useTheme();
  const {current} = useWeather();

  return (
    <View style={styles.wrapper}>
      <MainImage name={theme.theme} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Text
            style={[styles.temp, theme.primaryText]}
            accessibilityLabel={`${useTemperature(current.temperature)} degrees`}
          >
            {useTemperature(current.temperature)}
          </Text>
          <WeatherIcon name={current.icon} color={colors.text_2} width={40} height={40} />
        </View>
        <Text style={[styles.description, theme.primaryText]} accessibilityLabel={current.summary}>
          {CapitalizeFirstLetter(current.summary)}
        </Text>
        <Text
          style={[styles.description2, theme.secondaryText]}
          accessibilityLabel={`${lng.feelsLike} ${useTemperature(
            current.apparentTemperature,
          )} degrees`}
        >
          {`${lng.feelsLike} ${useTemperature(current.apparentTemperature)}`}
        </Text>
      </View>
    </View>
  );
});

const styles: any = StyleSheet.create({
  description: {
    fontSize: 24,
    textAlign: 'center',
  },
  description2: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },
  info: {
    position: 'relative',
    top: -40,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 96,
    lineHeight: 120,
    marginRight: 20,
    textAlign: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MainInfo;

import React, {FC, memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {HourlyDataPoint} from 'darkskyapi-ts';
import {fromUnixTime, format} from 'date-fns';
import WeatherIcon from './WeatherIcons';
import {useTemperature, useTheme} from '../hooks';

type TProps = {
  data: HourlyDataPoint;
};

const DailyScrollItem: FC<TProps> = memo(({data}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, theme.primaryText]}>
        {format(fromUnixTime(data.time), 'HH:mm')}
      </Text>
      <WeatherIcon name={data.icon} width={30} height={30} />
      <Text style={[styles.text, theme.secondaryText]}>{useTemperature(data.temperature)}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
  },
});

export default DailyScrollItem;

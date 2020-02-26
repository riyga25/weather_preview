import React, {FC, memo, useCallback} from 'react';
import {slice} from 'ramda';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {HourlyDataPoint} from 'darkskyapi-ts';
import DailyScrollItem from './DailyScrollItem';
import {useTheme, useWeather} from '../hooks';
import lng from '../localization';

const DailyScroll: FC = memo(() => {
  const theme = useTheme();
  const {hourly} = useWeather();
  const dayData = slice(0, 25, hourly.data);

  const renderItem = ({item}: {item: HourlyDataPoint}) => <DailyScrollItem data={item} />;
  const keyExtractor = useCallback((item: HourlyDataPoint) => `${item.time}`, []);

  return (
    <View style={styles.section}>
      <Text style={[styles.title, theme.primaryText]}>{lng.hourForecast}</Text>
      <Text style={[styles.subtitle, theme.secondaryText]}>{lng.hourlyWeather}</Text>
      <View style={styles.chartWrapper}>
        <FlatList
          data={dayData}
          style={styles.scroll}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  chartWrapper: {
    paddingVertical: 20,
  },
  scroll: {
    paddingLeft: 10,
    paddingRight: 16,
  },
  section: {
    marginTop: 24,
  },
  subtitle: {
    fontSize: 14,
    paddingLeft: 16,
  },
  title: {
    fontSize: 24,
    paddingLeft: 16,
  },
});

export default DailyScroll;

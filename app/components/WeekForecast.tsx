import React, {FC, memo} from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import {DailyDataPoint} from 'darkskyapi-ts';
import WeekListItem from './WeekListItem';
import {useTheme, useWeather} from '../hooks';
import lng from '../localization';

const WeekForecast: FC = memo(() => {
  const theme = useTheme();
  const {daily} = useWeather();

  const renderItem = ({item}: {item: DailyDataPoint}) => (
    <WeekListItem key={`${item.time}`} item={item} />
  );

  const keyExtractor = (item: DailyDataPoint): string => `${item.time}`;

  const renderSeparator = () => (
    <View style={[styles.separator, {borderColor: theme.secondaryColor}]} />
  );

  return (
    <SafeAreaView style={styles.section}>
      <Text style={[styles.title, theme.primaryText]}>{lng.weeklyForecast}</Text>
      <Text style={[styles.subtitle, theme.secondaryText]}>{lng.nextDays}</Text>
      <FlatList
        scrollEnabled={false}
        data={daily.data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  section: {
    marginTop: 16,
  },
  separator: {
    borderBottomWidth: 1,
  },
  subtitle: {
    marginBottom: 20,
    paddingLeft: 16,
  },
  title: {
    fontSize: 24,
    paddingLeft: 16,
  },
});

export default WeekForecast;

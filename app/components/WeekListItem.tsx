import React, {FC, memo, useCallback} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DailyDataPoint} from 'darkskyapi-ts';
import {isToday, isTomorrow, format, fromUnixTime, isYesterday} from 'date-fns';
import WeatherIcon from './WeatherIcons';
import {routes} from '../constants';
import {useLocale, useTemperature, useTheme} from '../hooks';
import lng from '../localization';

type TProps = {
  item: DailyDataPoint;
};

const WeekListItem: FC<TProps> = memo(({item}) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const renderDay = useCallback(() => {
    if (isYesterday(fromUnixTime(item.time))) {
      return lng.yesterday;
    }
    if (isToday(fromUnixTime(item.time))) {
      return lng.today;
    }
    if (isTomorrow(fromUnixTime(item.time))) {
      return lng.tomorrow;
    }
    return format(fromUnixTime(item.time), 'cccc', {locale: useLocale()});
  }, [item.time]);

  const showDetail = () => {
    navigation.navigate(routes.DAY_DETAIL, {time: item.time});
  };

  return (
    <TouchableOpacity onPress={showDetail} style={styles.wrapper}>
      <View style={styles.flex}>
        <Text style={[styles.day, theme.secondaryText]}>
          {format(fromUnixTime(item.time), 'dd MMMM', {locale: useLocale()})}
        </Text>
        <Text style={[styles.text, theme.primaryText]}>{renderDay()}</Text>
      </View>
      <View style={[styles.section, styles.center]}>
        <WeatherIcon name={item.icon} height={28} width={28} />
      </View>
      <View style={[styles.section, styles.right]}>
        <Text style={[styles.text, theme.primaryText]}>{useTemperature(item.temperatureMax)}</Text>
        <Text style={[styles.text, styles.secondTemp, theme.secondaryText]}>
          {useTemperature(item.temperatureMin)}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  day: {
    fontSize: 14,
  },
  flex: {
    flex: 2,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  secondTemp: {
    marginLeft: 20,
  },
  section: {
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default WeekListItem;

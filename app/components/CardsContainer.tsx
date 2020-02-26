import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import ParameterCard from './ParameterCard';
import {Icons} from './AppIcons';
import lng from '../localization';
import {usePressure, useWeather, useWind} from '../hooks';

export type TCard = {
  title: string;
  desc: string | number;
  icon: Icons;
};

const CardsContainer: FC = memo(() => {
  const {current} = useWeather();
  const wind = useWind(current.windSpeed, current.windBearing);
  const uv = current.uvIndex;
  const humidity = `${Math.ceil(current.humidity * 100)}%`;
  const pressure = usePressure(current.pressure);

  const cards: Array<TCard> = useMemo(
    () => [
      {title: lng.wind, desc: wind, icon: Icons.WIND},
      {title: lng.humidity, desc: humidity, icon: Icons.DROPS},
      {title: lng.pressure, desc: pressure, icon: Icons.PRESSURE},
      {title: lng.UVIndex, desc: uv, icon: Icons.SUN},
    ],
    [humidity, pressure, uv, wind],
  );

  return (
    <View style={styles.container}>
      {cards.map(item => (
        <ParameterCard key={item.title} title={item.title} icon={item.icon} desc={item.desc} />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 16,
  },
});

export default CardsContainer;

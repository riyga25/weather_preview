import React, {FC, memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TCard} from './CardsContainer';
import {useTheme} from '../hooks';
import AppIcons from './AppIcons';

const ParameterCard: FC<TCard> = memo(({icon, title, desc}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={theme.secondaryText}>{title}</Text>
        <Text style={[styles.desc, theme.primaryText]}>{desc}</Text>
      </View>
      <AppIcons name={icon} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingVertical: 7,
    width: '45%',
  },
  desc: {
    fontSize: 14,
  },
  icon: {
    width: 29,
  },
  textContainer: {
    marginRight: 20,
  },
});

export default ParameterCard;

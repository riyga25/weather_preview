import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../constants';
import Switch from './Switch';

type Props = {
  title: string;
  param1: string;
  param2: string;
  value: boolean;
  onPress: () => void;
};

const SettingsSwitch: FC<Props> = memo(({title, param1, param2, value, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Switch onPress={onPress} value={value} param2={param2} param1={param1} />
    </View>
  );
});

const styles = StyleSheet.create({
  element: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  },
  text: {
    color: colors.text_1,
    marginHorizontal: 8,
    ...fonts.regular,
  },
  title: {
    ...fonts.regular,
    color: colors.text_1,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default SettingsSwitch;

import React, {FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../constants';

type Props = {
  title: string;
  value?: string | number;
};

const StaticText: FC<Props> = memo(({title, value = ''}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  text: {
    ...fonts.regular,
    color: colors.text_1,
    fontSize: 16,
    lineHeight: 24,
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

export default StaticText;

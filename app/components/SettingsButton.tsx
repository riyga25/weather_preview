import React, {FC, memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppIcons, {Icons} from './AppIcons';
import {routes} from '../constants';

const SettingsButton: FC = memo(() => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(routes.SETTINGS);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <AppIcons name={Icons.SETTINGS} />
    </TouchableOpacity>
  );
});

export default SettingsButton;

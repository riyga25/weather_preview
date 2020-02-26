import {useCallback} from 'react';
import {NativeModules} from 'react-native';
import {useWeather} from './data';
import {useTemperature} from './params';

const {SharedStorage} = NativeModules;

export const useWidget = () => {
  const {current} = useWeather();
  const temp = useTemperature(current.apparentTemperature);

  const updateWidget = useCallback(() => {
    SharedStorage.set(JSON.stringify({temperature: temp}));
  }, [temp]);

  return {updateWidget};
};

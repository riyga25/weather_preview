import {useSelector} from 'react-redux';
import lng from '../localization';
import windDirection, {Direction} from '../helpers/WindDirection';
import {settingsCelsius, settingsHPa, settingsMetres} from '../selectors';

export const useTemperature = (temp: number): string => {
  const isCelsis = useSelector(settingsCelsius);
  const cToF = (celsius: number): number => (celsius * 9) / 5 + 32;
  const fixTemp = (t: number): number => Math.ceil(t);
  const fixSign = (t: number): string => {
    if (t > 0) {
      return `+${t}\xB0`;
    }
    return `${t}\xB0`;
  };

  if (isCelsis) {
    return fixSign(fixTemp(temp));
  }
  return fixSign(fixTemp(cToF(temp)));
};

export const useWind = (speed: number, direction?: number): string => {
  const metres = useSelector(settingsMetres);
  const symbol: string = metres ? lng.ms : lng.kmh;
  const key: Direction = windDirection(direction);
  const direct: string = direction ? lng.windDirection[key] : '';
  const fixSpeed = (s: number): number => Math.ceil(s);
  const mToKm = (s: number): number => s * 3.6;
  const addSign = (s: number): string => `${s} ${symbol} ${direct}`;

  if (speed > 0) {
    if (metres) {
      return addSign(fixSpeed(speed));
    }
    return addSign(fixSpeed(mToKm(speed)));
  }
  return lng.calm;
};

export const usePressure = (value: number): string => {
  const ishPa = useSelector(settingsHPa);
  const hToM = (p: number): number => p / 1.333;
  const symbol: string = ishPa ? lng.hPa : lng.mmHg;
  const fixPress = (p: number): number => Math.ceil(p);
  const addSign = (p: number): string => `${p} ${symbol}`;

  if (ishPa) {
    return addSign(fixPress(value));
  }
  return addSign(fixPress(hToM(value)));
};

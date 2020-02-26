import {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// @ts-ignore
import {getSunrise, getSunset} from 'sunrise-sunset-js';
import {isBefore, isAfter, Locale} from 'date-fns';
import {enUS, ru} from 'date-fns/locale';
import {lightTheme, darkTheme, Theme} from '../themes';
import {
  settingsCelsius,
  settingsHPa,
  settingsMetres,
  userLanguage,
  userPosition,
} from '../selectors';
import lng from '../localization';
import {updateSettings} from '../actions/settings';

export const useTheme = (): Theme => {
  const {lat, lon} = useSelector(userPosition);

  if (!lat || !lon) {
    return lightTheme;
  }

  const currentTime = new Date();
  const sunrise = getSunrise(lat, lon, currentTime);
  const sunset = getSunset(lat, lon, currentTime);

  if (isBefore(currentTime, sunrise) || isAfter(currentTime, sunset)) {
    return darkTheme;
  }
  return lightTheme;
};

export const useSettings = () => {
  const dispatch = useDispatch();
  const celsius = useSelector(settingsCelsius);
  const metres = useSelector(settingsMetres);
  const hPa = useSelector(settingsHPa);

  const update = useCallback(
    (key: string) => (value: any) => {
      dispatch(updateSettings({[key]: value}));
    },
    [dispatch],
  );

  return {
    update,
    hPa,
    metres,
    celsius,
  };
};

export const useLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector(userLanguage);
  const languages = {
    ru: ['ru', 'ru-RU', 'be-BY', 'uk-UA'],
  };

  useEffect(() => {
    const interfaceLang = lng.getInterfaceLanguage();

    if (languages.ru.includes(interfaceLang)) {
      lng.setLanguage('ru');
      if (language !== 'ru') {
        dispatch(updateSettings({language: 'ru'}));
      }
    } else {
      lng.setLanguage('en');
      if (language !== 'en') {
        dispatch(updateSettings({language: 'en'}));
      }
    }
  }, [dispatch, language, languages.ru]);
};

export const useLocale = (): Locale => {
  const language = useSelector(userLanguage);
  let locale = enUS;

  if (language === 'ru') {
    locale = ru;
  }

  return locale;
};

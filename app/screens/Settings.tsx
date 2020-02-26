import React, {FC, memo} from 'react';
import AppBackground from '../components/Background';
import lng from '../localization';
import {useSettings} from '../hooks';
import SettingsSwitch from '../components/SeetingsSwitch';

const Settings: FC = memo(() => {
  const {update, hPa, metres, celsius} = useSettings();

  return (
    <AppBackground>
      <SettingsSwitch
        onPress={update('celsius')}
        title={lng.temperature}
        param1={`\xB0F`}
        param2={`\xB0C`}
        value={celsius}
      />
      <SettingsSwitch
        onPress={update('metres')}
        title={lng.windSpeed}
        param1={lng.kmh}
        param2={lng.ms}
        value={metres}
      />
      <SettingsSwitch
        onPress={update('hPa')}
        title={lng.pressure}
        param1={lng.mmHg}
        param2={lng.hPa}
        value={hPa}
      />
    </AppBackground>
  );
});

export default Settings;

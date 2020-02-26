import React, {FC} from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import {routes, fonts, colors} from '../constants';
import {RootStackParamList} from './types';

import MainScreen from '../screens/Main';
import SettingsScreen from '../screens/Settings';
import DayDetail from '../screens/DayDetail';
import SettingsButton from '../components/SettingsButton';
import lng from '../localization';
import {useLanguage} from '../hooks';

const Stack = createStackNavigator<RootStackParamList>();

const stackConfig: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    ...fonts.regular,
    fontWeight: '600',
    fontSize: 18,
    paddingHorizontal: 24,
  },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerBackTitleVisible: false,
  headerTransparent: true,
  headerRightContainerStyle: {
    paddingHorizontal: 16,
  },
  headerTintColor: colors.text_1,
};

const Navigation: FC = () => {
  useLanguage();

  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName={routes.MAIN} screenOptions={stackConfig}>
        <Stack.Screen
          name={routes.MAIN}
          component={MainScreen}
          options={{headerRight: () => <SettingsButton />, title: ''}}
        />
        <Stack.Screen
          name={routes.SETTINGS}
          component={SettingsScreen}
          options={() => ({title: lng.settings})}
        />
        <Stack.Screen name={routes.DAY_DETAIL} component={DayDetail} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default Navigation;

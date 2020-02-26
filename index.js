import {AppRegistry, StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import React, {memo} from 'react';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import Navigation from './app/navigation';
import {persistor, store} from './app/store';

export const Application = memo(() => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Navigation />
    </PersistGate>
  </Provider>
));

AppRegistry.registerComponent(appName, () => Application);

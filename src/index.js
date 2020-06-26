import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import store from './store';
import Route from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Route />
      </NavigationContainer>
    </Provider>
  );
}

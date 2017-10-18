import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { AlertProvider } from './components/Alert';
import { NavigateContainer } from './components/NavigateContainer';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFF',
  $border: '#e2e2e2',
  $inputText: '#999',
  $lightGrey: '#F0F0F0',
  $darkText: '#343434',
});

const App = () => (
  <Provider store={store}>
    <AlertProvider>
      <NavigateContainer />
    </AlertProvider>
  </Provider>
);

export default App;

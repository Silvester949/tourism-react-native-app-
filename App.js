import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/store';
import Routes from './src/navigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar translucent backgroundColor="transparent" />
          <Routes />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

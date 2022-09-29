import type {ReactElement} from 'react';
import React from 'react';
import {Provider} from 'react-redux';

import RootNavigation from '~/navigation/RootNavigation';
import {store} from '~/store';

const App: () => ReactElement = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

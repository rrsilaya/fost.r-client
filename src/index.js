import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './app/AppContainer';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

// UIkit
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// import './assets/css/uikit/uikit.min.css';
import './assets/css/uikit/styles.min.css';

import './assets/css/index.css';

UIkit.use(Icons);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

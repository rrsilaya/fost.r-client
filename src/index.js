import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './assets/css/uikit.min.css';

import './assets/css/index.css';

UIkit.use(Icons);

ReactDOM.render(
  <App />,
document.getElementById('root'));

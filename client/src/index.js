import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';

import App from './App';
// import * as serviceWorker from './serviceWorker';
const Application = (
  <BrowserRouter>
    <Frontload noServerRender>
      <App />
    </Frontload>
  </BrowserRouter>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(Application, document.getElementById('root'));
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

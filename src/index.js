import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App';
import {Provider} from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Provider> */}
        <App/>
      {/* </Provider> */}
  </React.StrictMode>
);

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './main.scss';
import App from './App';
import { Spin } from 'antd';
import reportWebVitals from './reportWebVitals';

import { RelayEnvironmentProvider } from 'react-relay';
import Environment from './Environment';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Environment}>
      <Suspense fallback={<Spin />}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

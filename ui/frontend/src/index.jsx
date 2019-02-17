import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './common.scss';

ReactDOM.render(<App />, document.getElementById('app-root'));

if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./Container/App";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

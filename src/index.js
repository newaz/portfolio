import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/es6/map';
import 'core-js/es6/set';
import App from './App';
import './favicon.ico';
import './style/style.scss';

const rootElt = document.getElementById('root');

ReactDOM.render(
	<App />, rootElt
);

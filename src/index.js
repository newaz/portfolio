import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import 'core-js/es6/map';
import 'core-js/es6/set';
import App from './App';
import './images/favicon.ico';
import './style/style.css';

ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.getElementById('root'))

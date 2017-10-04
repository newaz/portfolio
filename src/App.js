import React, { Component } from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<Header />
				</div>
				<div>
					<Main />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;

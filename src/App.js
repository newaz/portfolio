import React, { Component } from 'react';
import {Navigation} from './components/Navigation';
import {Footer} from './components/Footer';

export const App = () => {
	return (
		<div className="App Site">
			<div className="Site-content">
				<Navigation />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
export default App;

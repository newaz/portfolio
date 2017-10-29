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
				<footer className='site-footer'>
					<div className='wrapper'>
						<div className='footer-social'>
							<ul>
								<li>
									<Footer/>
								</li>
							</ul>
						</div>
					</div>
					<div className='identity'>
						<p>© 2017 Maria D. Campbell</p>
					</div>
				</footer>
			</div>
		</div>
	);
}
export default App;

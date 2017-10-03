import React from 'react';

export const Footer = () => (
	<footer className='site-footer'>
		<div className='wrapper'>
			<div className='footer-social'>
				<ul>
					<li>
						<a href="https://twitter.com/letsbsocial1">
							<img className="twitter" src={'./images/icons/twitter.png'} width="40" alt="twitter" />
						</a>
					</li>
					<li>
						<a href="https://github.com/interglobalmedia">
							<img className="github" src={'./images/icons/github.png'} width="40" alt="github" />
						</a>
					</li>
					<li>
						<a href="https://plus.google.com/u/0/110861192597778984723">
							<img className="google-plus" src={'./images/icons/google.png'} width="35" alt="google plus" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/mariacampbell/">
							<img className="linkedin" src={'./images/icons/linkedin_white_t.png'} width="40" alt="linkedin" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className='identity'>
			<p>© 2017 Maria D. Campbell</p>
		</div>
	</footer>
)

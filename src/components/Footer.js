import React from 'react';

const footerTwitter = require('../../images/icons/footerTwitter.png');
const footerGithub = require('../images/icons/footerGithub.png');
const footerGoogle = require('../../images/icons/footerGoogle.png');
const footerLinkedin = require('../../images/icons/footerLinkedin.png');

export const Footer = () => (
	<footer className='site-footer'>
		<div className='wrapper'>
			<div className='footer-social'>
				<ul>
					<li>
						<a href="https://twitter.com/letsbsocial1">
							<img className="footerTwitter" src={'../../images/icons/footerTwitter.png'} width="40" alt="twitter" />
						</a>
					</li>
					<li>
						<a href="https://github.com/interglobalmedia">
							<img className="footerGithub" src={'../../images/icons/footerGithub.png'} width="40" alt="github" />
						</a>
					</li>
					<li>
						<a href="https://plus.google.com/u/0/110861192597778984723">
							<img className="footerGoogleplus" src={'../../images/icons/footerGoogle.png'} width="35" alt="google plus" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/mariacampbell/">
							<img className="footerLinkedin" src={'../../images/icons/footerLinkedin.png'} width="40" alt="linkedin" />
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

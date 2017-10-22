import React from 'react';

import footerTwitter from '../../images/icons/footerTwitter.png';
import footerGithub from '../../images/icons/footerGithub.png';
import footerGoogle from '../../images/icons/footerGoogle.png';
import footerLinkedin from '../../images/icons/footerLinkedin.png';

export const Footer = () => {
	return (
		<footer className='site-footer'>
			<div className='wrapper'>
				<div className='footer-social'>
					<ul>
						<li>
							<a href="https://twitter.com/letsbsocial1">
								<img className="footerTwitter" src={footerTwitter} width="40" alt="twitter" />
							</a>
						</li>
						<li>
							<a href="https://github.com/interglobalmedia">
								<img className="footerGithub" src={footerGithub} width="40" alt="github" />
							</a>
						</li>
						<li>
							<a href="https://plus.google.com/u/0/110861192597778984723">
								<img className="footerGoogleplus" src={footerGoogle} width="35" alt="google plus" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/mariacampbell/">
								<img className="footerLinkedin" src={footerLinkedin} width="40" alt="linkedin" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='identity'>
				<p>© 2017 Maria D. Campbell</p>
			</div>
		</footer>
	);
}

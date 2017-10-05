import React from 'react';

export const Footer = () => (
	<footer className='site-footer'>
		<div className='wrapper'>
			<div className='footer-social'>
				<ul>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://twitter.com/letsbsocial1">
									<div className="side back">
										<img className="footerTwitter" src={'./images/icons/twitter.png'} width="40" alt="twitter" />
									</div>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://github.com/interglobalmedia">
									<div className="side back">
										<img className="footerGithub" src={'./images/icons/github.png'} width="40" alt="github" />
									</div>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://plus.google.com/u/0/110861192597778984723">
									<div className="side back">
										<img className="footerGoogleplus" src={'./images/icons/google.png'} width="35" alt="google plus" />
									</div>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://www.linkedin.com/in/mariacampbell/">
									<div className="side back">
										<img className="footerLinkedin" src={'./images/icons/linkedin_white_t.png'} width="40" alt="linkedin" />
									</div>
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div className='identity'>
			<p>© 2017 Maria D. Campbell</p>
		</div>
	</footer>
)

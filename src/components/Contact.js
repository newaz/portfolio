import React from 'react';

const linkedin = require('../images/icons/linkedin.svg');
const googleplus = require('../images/icons/googleplus.svg');
const github = require('../images/icons/github.svg');
const twitter = require('../images/icons/twitter.svg');

export const Contact = () => (
	<div className="Contact-content">
		<div className='contact-social'>
			<h2>Follow Me</h2>
			<ul>
				<li>
					<div className="icon-container">
						<div className="icon">
							<a href="https://twitter.com/letsbsocial1" target="_blank">
								<div className="side back">
									<img className="twitter" src={'../images/icons/twitter.svg'} width="40" alt="twitter" />
								</div>
							</a>
						</div>
					</div>
				</li>
				<li>
					<div className="icon-container">
						<div className="icon">
							<a href="https://github.com/interglobalmedia" target="_blank">
								<div className="side back">
									<img className="github" src={'../images/icons/github.svg'} width="40" alt="github" />
								</div>
							</a>
						</div>
					</div>
				</li>
				<li>
					<div className="icon-container">
						<div className="icon">
							<a href="https://plus.google.com/u/0/110861192597778984723" target="_blank">
								<div className="side back">
									<img className="google-plus" src={'../images/icons/googleplus.svg'} width="40" alt="google plus" />
								</div>
							</a>
						</div>
					</div>
				</li>
				<li>
					<div className="icon-container">
						<div className="icon">
							<a href="https://www.linkedin.com/in/mariacampbell/" target="_blank">
								<div className="side back">
									<img className="linkedin" src={'../images/icons/linkedin.svg'} width="40" alt="linkedin" />
								</div>
							</a>
						</div>
					</div>
				</li>
			</ul>
			<div className="follow">
				<li>
					<a href="https://medium.com/@letsbsocial1" target="_blank">Medium</a>
				</li>
				<br />
				<li>
					<a href="http://www.mariadcampbell.com/" target="_blank">Dev. Blog</a>
				</li>
				<li>
					<a href="http://interglobalmedianetwork.com/" target="_blank">co. blog</a>
				</li>
			</div>
			<div className="email">
				<h2>Email</h2>
				<li>
					<a href="mailto:interglobalmedia@gmail.com">interglobalmedia@gmail.com</a>
				</li>
			</div>
			<div className="contribute">
				<h2>Contributor to</h2>
				<li>
					<a href="https://blog.hellojs.org/" trget="_blank">hello.js</a>
				</li>
				<br />
				<li>
					<a href="https://dev.to/letsbsocial1" target="_blank">The Practical Dev</a>
				</li>
			</div>
		</div>
	</div>
)

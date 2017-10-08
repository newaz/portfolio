import React from 'react';
import Typist from 'react-typist';

import linkedin from '../../images/icons/linkedin.svg';
import googleplus from '../../images/icons/googleplus.svg';
import github from '../../images/icons/github.svg';
import twitter from '../../images/icons/twitter.svg';

export const Contact = () => (
	<div className="Contact-content">
		<div className="contact-social">
			<h2 className="title-social">Follow me</h2>
			<ul>
				<li>
					<a href="https://twitter.com/letsbsocial1" target="_blank">
						<img className="twitter" src={twitter} width="40" alt="twitter"/>
					</a>
				</li>
				<li>
					<a href="https://github.com/interglobalmedia" target="_blank">
						<img className="github" src={github} width="40" alt="github"/>
					</a>
				</li>
				<li>
					<a href="https://plus.google.com/u/0/110861192597778984723" target="_blank">
						<img className="google-plus" src={googleplus} width="40" alt="google plus"/>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/mariacampbell/" target="_blank">
						<img className="linkedin" src={linkedin} width="40" alt="linkedin"/>
					</a>
				</li>
			</ul>
			<div className="follow">
				<li>
					<a href="https://medium.com/@letsbsocial1" target="_blank">Medium</a>
				</li>
				<br/>
				<li>
					<a href="http://www.mariadcampbell.com/" target="_blank">Dev. Blog</a>
				</li>
				<li>
					<a href="http://interglobalmedianetwork.com/" target="_blank">co. blog</a>
				</li>
			</div>
			<div className="email">
				<h2 className="title-social">Email</h2>
				<li>
					<a href="mailto:interglobalmedia@gmail.com">interglobalmedia@gmail.com</a>
				</li>
			</div>
			<div className="contribute">
				<h2 className="title-social">Contributor to</h2>
				<li>
					<a href="https://blog.hellojs.org/" trget="_blank">hello.js</a>
				</li>
				<br/>
				<li>
					<a href="https://dev.to/letsbsocial1" target="_blank">The Practical Dev</a>
				</li>
			</div>
		</div>
	</div>
)

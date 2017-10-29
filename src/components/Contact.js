import React from 'react';

import linkedin from '../../images/icons/linkedin.svg';
import googleplus from '../../images/icons/googleplus.svg';
import github from '../../images/icons/github.svg';
import twitter from '../../images/icons/twitter.svg';

import {ContactIcons} from './ContactIcons';
import {Follow} from './Follow';
import {Email} from './Email';
import {Contribute} from './Contribute';

export const Contact = () => {
	return (
		<div className="Contact-content">
			<div className="contact-social">
				<h2 className="title-social">Follow me</h2>
				<ul className="contact-icons">
					<ContactIcons />
				</ul>
				<div className="follow">
					<Follow />
				</div>
				<div className="email">
					<h2 className="title-social">Email</h2>
					<Email />
				</div>
				<div className="contribute">
					<h2 className="title-social">Contributor to</h2>
					<Contribute />
				</div>
			</div>
		</div>
	);
}

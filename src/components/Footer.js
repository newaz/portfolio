import React from 'react';

import footerTwitter from '../../images/icons/footerTwitter.png';
import footerGithub from '../../images/icons/footerGithub.png';
import footerGoogle from '../../images/icons/footerGoogle.png';
import footerLinkedin from '../../images/icons/footerLinkedin.png';

export const Footer = () => {
	return (
		[
			{
				id: 1,
				link: 'https://twitter.com/letsbsocial1',
				name: 'footerTwitter',
				src: footerTwitter,
				width: '40',
				text: 'twitter'
			},
			{
				id: 2,
				link: 'https://github.com/interglobalmedia',
				name: 'footerGithub',
				src: footerGithub,
				width: '40',
				text: 'github'
			},
			{
				id: 3,
				link: 'https://plus.google.com/u/0/110861192597778984723',
				name: 'footerGoogleplus',
				src: footerGoogle,
				width: '35',
				text: 'google plus'
			},
			{
				id: 4,
				link: 'https://www.linkedin.com/in/mariacampbell/',
				name: 'footerLinkedin',
				src: footerLinkedin,
				width: '40',
				text: 'linkedin'
			}
		].map((socialFooterIcon) => {
			return (<a key={socialFooterIcon.id} href={socialFooterIcon.link}>
				<img className={socialFooterIcon.name} src={socialFooterIcon.src} width={socialFooterIcon.width} alt={socialFooterIcon.text} />
			</a>)
		})
	)
}

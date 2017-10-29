import React from 'react';

import linkedin from '../../images/icons/linkedin.svg';
import googleplus from '../../images/icons/googleplus.svg';
import github from '../../images/icons/github.svg';
import twitter from '../../images/icons/twitter.svg';

export const ContactIcons = () => {
	return (
		[
			{
				id: 1,
				iconLink: 'https://twitter.com/letsbsocial1',
				name: 'twitter',
				src: twitter,
				width: '40',
				text: 'twitter'
			},
			{
				id: 2,
				iconLink: 'https://github.com/interglobalmedia',
				name: 'github',
				src: github,
				width: '40',
				text: 'github'
			},
			{
				id: 3,
				iconLink: 'https://plus.google.com/u/0/110861192597778984723',
				name: 'google-plus',
				src: googleplus,
				width: '40',
				text: 'google plus'
			},
			{
				id: 4,
				iconLink: 'https://www.linkedin.com/in/mariacampbell/',
				name: 'linkedin',
				src: linkedin,
				width: '40',
				text: 'linkedin'
			}
		].map((icon) => {
			return (
				<li key={icon.id}>
					<a href={icon.iconLink} target="_blank">
						<img className={icon.name} src={icon.src} width={icon.width} alt={icon.text}/>
					</a>
				</li>
			)
		})
	)
}

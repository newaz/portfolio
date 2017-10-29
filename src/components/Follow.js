import React from 'react';

export const Follow = () => {
	return (
		[
			{
				id: 1,
				url: 'https://medium.com/@letsbsocial1',
				targetContent: '_blank',
				text: 'Medium'
			},
			{
				id: 2,
				url: 'http://www.mariadcampbell.com/',
				targetContent: '_blank',
				text: 'Dev. Blog'
			},
			{
				id: 3,
				url: 'http://interglobalmedianetwork.com/',
				targetContent: '_blank',
				text: 'co. blog'
			}
		].map((followLink) => {
			return (
				<li key={followLink.id}>
					<a href={followLink.url} target={followLink.targetContent}>{followLink.text}</a>
				</li>
			)
		})
	)
}

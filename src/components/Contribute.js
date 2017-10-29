import React from 'react';

export const Contribute = () => {
	return (
		[
			{
				id: 1,
				url: 'https://blog.hellojs.org/',
				targetContent: '_blank',
				text: 'hello.js'
			},
			{
				id: 2,
				url: 'https://dev.to/letsbsocial1',
				targetContent: '_blank',
				text: 'The Practical Dev'
			}
		].map((contribute) => {
			return (
				<li key={contribute.id}>
					<a href={contribute.url} target={contribute.targetContent}>{contribute.text}</a>
				</li>
			)
		})
	)
}

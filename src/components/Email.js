import React from 'react';

export const Email = () => {
	return (
		[
			{
				id: 1,
				link: 'mailto:interglobalmedia@gmail.com',
				text: 'interglobalmedia@gmail.com'
			}
		].map((email) => {
			return (
				<li key={email.id}>
					<a href={email.link}>{email.text}</a>
				</li>
			)
		})
	)
}

import React from 'react';
import {Link} from 'react-router-dom';

export const FeaturedPosts = () => {
	return (
		[
			{
				id: 1,
				tagName1: 'flexbox',
				tagName2: 'react',
				linkPath: '/articles/flexboxstickyfooterreact',
				title: 'flexbox, sticky footer, and react',
				text: 'i came across a design challenge pretty quickly into the project. the "raised footer" issue. pages which had little or no content meant a footer which failed to stay grounded to the bottom of the page',
				morLinkText: 'read more...'
			},
			{
				id: 2,
				tagName1: 'images',
				tagName2:'react',
				linkPath: '/articles/importingimagesreact',
				title: 'importing images in react',
				text: 'first i want to talk about what webpack tools you need in order to be able to add images to your React application. it\'s not just about what you need to do with React. if your workflow emanates from',
				moreLinkText: 'read more...'
			},
			{
				id: 3,
				tagName1: 'workflows',
				tagName2: 'react',
				linkPath: '/articles/myfirstpresentation',
				title: 'my first presentation',
				text: 'tonight i gave my first tech presentation (ever), and it was about creating your own React workflow without using create-react-app. i was nervous at first, but then after a minute or two, i relaxed a',
				moreLinkText: 'read more...'
			},
			{
				id: 4,
				tagName1: 'jest',
				tagName2: 'mocks',
				linkPath: '/articles/jestreactmocks',
				title: 'jest, react, and mocks',
				text: 'i use facebook\'s jest to test my react applications. yesterday, i ran a test to make sure that the changes i made to my Work component passed in my portfolio react app. it did not! but as indicated in',
				moreLinkText: 'read more...'
			}
		].map((featuredPost) => {
			return (
				<div className="post" key={featuredPost.id}>
					<div className="post-tags">
						<li>
							<Link to={featuredPost.linkPath}>
								{featuredPost.tagName1}
							</Link>
						</li>
						<li>
							<Link to={featuredPost.linkPath}>
								{featuredPost.tagName2}
							</Link>
						</li>
					</div>
					<h2>
						<Link to={featuredPost.linkPath}>
							{featuredPost.title}
						</Link>
					</h2>
					<p>
						{featuredPost.text}
					</p>
					<p className="post-read-more-link">
						<Link to={featuredPost.linkPath}>
							{featuredPost.moreLinkText}
						</Link>
					</p>
				</div>
			)
		})
	)
}

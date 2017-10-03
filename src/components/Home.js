import React from 'react';

export const Home = () => {
	return (
		<div className="Home-content">
			<div class="spacer">
		    	&nbsp;
			</div>
			<div className="Home-profile">
				<img src={'./images/profile-small.png'} className="Profile-image" alt="Profile image" />
			</div>
			<h1>hi. i'm maria.</h1>
			<h2>I am a <span>visual developer</span> and <span>problem solver</span>.</h2>
			<p>
				I am a native New Yorker, photographer, videographer, blogger, former graphic designer/digital product photographer in the Beauty Industry, and for many years a fashion designer. I first started developing with WordPress in 2007, and ended up choosing Front End Development because it permits me to find practical application to things I love.
			</p>

			<p>
				My SPECIALTIES include HTML5, CSS3, CSS Flexbox, JavaScript, ES6+, NPM, NodeJS, Sass, PostCSS, Gulp, Webpack 2+, Static Website Generators, Liquid Syntax, Command Line, Markdown, Git, Github, Creative Suite, "Candid Camera", Keynote, technical writing, and more.
			</p>

			<p>
				2017 is the year for conquering React, MongoDB, and Express.
			</p>

			<p>
				When I’m not coding, I love to go to the countryside to recharge, watch Film Noir and mystery movies, listen to music, ponder over surrealist art, and create exotic cuisine.
			</p>
		</div>
	);
}

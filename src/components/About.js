import React from 'react';
import Typist from 'react-typist';
import profileSmall from '../../images/profileSmall.png';
import mdcResume8217 from '../../images/resume/mdcResume8217.pdf';

export const About = () => {
	return (
		<div className="About-content">
			<div className="About-profile">
				<img src={profileSmall} className="Profile-image" alt="Profile image" />
			</div>
			<div className="About-description">
				<Typist>
					<h2 className="heading-thistle-medium">hi. i'm maria.</h2>
					<h3 className="heading-thistle-medium">I am a <span>visual developer</span> and <span>problem solver</span>.</h3>
				</Typist>
				<p>
						I am a native New Yorker, photographer, videographer, blogger, former graphic designer/digital product photographer in the Beauty Industry, and for many years a fashion designer. I first started developing with WordPress in 2007, and ended up choosing Front End Development because it permits me to find practical application to things I love.
				</p>

				<p>
						My SPECIALTIES include <span>HTML5</span>, <span>CSS3</span>, <span>CSS Flexbox</span>, <span>CSS Modules</span>, <span>React</span>, <span>JavaScript</span>, <span>ES6+</span>, <span>NPM</span>, <span>NodeJS</span>, <span>Sass</span>, <span>PostCSS</span>, <span>Gulp</span>, <span>Webpack 2+</span>, <span>Static Website Generators</span>, <span>Liquid Syntax</span>, <span>Command Line, Markdown</span>, <span>Git</span>, <span>Github</span>, <span>Creative Suite</span>, <span>"Candid Camera"</span>, <span>Keynote</span>, <span>technical writing</span>, and more.
				</p>

				<p>
						When I’m not coding, I love to go to the countryside to recharge, watch Film Noir and mystery movies, listen to music, ponder over surrealist art, and create exotic cuisine.
				</p>
				<h3 className="about-meetups">Developer Related Meetups Include:</h3>
				<p>
					<a href="https://www.meetup.com/hackerhours/" target="_blank">Hacker Hours</a>, <a href="https://www.meetup.com/JavaScript-New-York-City/" target="_blank">JavaScript.NYC</a>, <a href="https://www.meetup.com/HackerNestNYC/" targe="_blank">HackerNest NYC Tech Socials</a>, <a href="https://www.meetup.com/New-York-MongoDB-User-Group/" target="_blank">NY MongoDB User Group</a>, <a href="https://www.meetup.com/ReactNYC/" target="_blank">ReactNYC</a>, <a href="https://www.meetup.com/Design-Driven-NYC/" target="_blank">Design Driven NYC</a>, <a href="https://www.meetup.com/techinmotionnyc/" target="_blank">Tech in Motion: NYC</a>, <a href="https://www.meetup.com/New-York-Game-Makers/" target="_blank">New York Game Makers</a>, <a href="https://www.meetup.com/Software-Craftsmanship-New-York/" target="_blank">Software Craftsmanship New York</a>, <a href="https://www.meetup.com/JAMstack-nyc/" target="_blank">JAMStack NYC</a>, <a href="v" target="_blank">Code Driven NYC</a>, <a href="https://www.meetup.com/nodejs/" target="_blank">NYC Nodejs</a>, <a href="https://www.meetup.com/Web-Performance-NY/" target="_blank">New York Web Performance Group</a>, <a href="https://www.meetup.com/owaspnyc/" target="_blank">Open Web Application Security Project</a>, <a href="https://www.meetup.com/DigitalOceanNYC/" target="_blank">DigitalOcean NYC</a>, <a href="https://www.meetup.com/ReactNYC/" target="_blank">ReactNYC</a>
				</p>
				<h3 className="about-resources">Other Resources Include:</h3>
				<p>
					<a href="https://javascript30.com/" target="_blank">JavaScript30.com</a>, <a href="https://learnnode.com/" target="_blank">Learn Node</a>, <a href="https://reactforbeginners.com/" target="_blank">React For Beginners</a>, <a href="https://es6.io/" target="_blank">ES6 For Everyone</a>, <a href="https://egghead.io/" target="_blank">egghead.io</a>, <a href="https://www.udemy.com/" target="_blank">Udemy.com</a>, <a href="https://stackoverflow.com/" target="_blank">StackOverflow</a>, <a href="https://css-tricks.com/" target="_blank">CSS Tricks</a>, <a href="https://university.mongodb.com/" target="_blank">MongoDB University</a>, NY JavaScript Slack Channel, GDI NYC Slack Channel, NYCDA Slack Channel, WesBos Slack Channel(s), <a href="https://github.com/" target="_blank">Github.com</a>, <a href="https://teamtreehouse.com/" target="_blank">Treehouse.com</a>
				</p>
				<a href={mdcResume8217} className="resumeLink" download={mdcResume8217}>download resume</a>
			</div>
		</div>
	);
}

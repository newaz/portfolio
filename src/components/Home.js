import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import localStorage from '../../images/work/localStorage.jpg';
import rockinSynth from '../../images/work/rockinSynth.jpg';
import jsCssClock from '../../images/work/jsCssClock.jpg';
import simpleWeather from '../../images/work/simpleWeather.jpg';
import travelAgencySite from '../../images/work/travelAgencySite.jpg';
import randomQuoteMachine from '../../images/work/randomQuoteMachine.jpg';
import wikipediaViewer from '../../images/work/wikipediaViewer.jpg';
import bsurreal from '../../images/work/bsurreal.jpg';
import classiscare from '../../images/work/classiscare.jpg';

import {LocalStorage} from './LocalStorage';
import {RockinSynth} from './RockinSynth';
import {JsCssClock} from './JsCssClock';
import {SimpleWeather} from './SimpleWeather';
import {TravelAgencySite} from './TravelAgencySite';
import {RandomQuoteMachine} from './RandomQuoteMachine';
import {WikipediaViewer} from './WikipediaViewer';
import {BSurreal} from './BSurreal';
import {Classiscare} from './Classiscare';

export const Home = () => (
	<HashRouter>
		<div className="Home-content">
			<section className="home-section-projects">
				<h2>featured projects</h2>
				<ul className="project-list-home">
					<div className="project-tags">
						<li className="tag">
							<Link to='/work/localstorage'>local-storage</Link>
						</li>
					</div>
					<li className="project">
						<img className="project-image-home" src={localStorage}/>
						<figcaption className="project-caption">
							<Link to='/work/localstorage'>local storage</Link>
						</figcaption>
					</li>
					<div className="project-tags">
						<li className="tag">
							<figcaption className="project-caption">
								<Link to='/work/rockinsynth'>audio</Link>
							</figcaption>
						</li>
						<li className="tag">
							<figcaption className="project-caption">
								<Link to='/work/rockinsynth'>music</Link>
							</figcaption>
						</li>
					</div>
					<li className="project">
						<img className="project-image-home" src={rockinSynth}/>
						<figcaption className="project-caption">
							<Link to='/work/rockinSynth'>rockin' synth</Link>
						</figcaption>
					</li>
					<div className="project-tags">
						<li className="tag">
							<Link to='/work/jscssclock'>time</Link>
						</li>
					</div>
					<li className="project">
						<figure>
							<img className="project-image-home" src={jsCssClock}/>
							<figcaption className="project-caption">
								<Link to='/work/jscssclock'>js css clock</Link>
							</figcaption>
						</figure>
					</li>
				</ul>
			</section>
			<section className="home-section-articles .home-section-last">
				<h2>featured articles</h2>
				<ul className="post-list-home">
					<div className="post">
						<ul className="post-tags">
							<li>
								<Link to='/articles/flexboxstickyfooterreact'>flexbox</Link>
							</li>
							<li>
								<Link to='/articles/flexboxstickyfooterreact'>react</Link>
							</li>
						</ul>
						<h2>
							<Link to='/articles/flexboxstickyfooterreact'>flexbox, sticky footer, and react</Link>
						</h2>
						<p>
								i came across a design challenge pretty quickly into the project. the 'raised footer' issue. pages which had little or no content meant a footer which failed to stay grounded to the bottom of the page
						</p>
						<p className="post-read-more-link">
							<Link to='/articles/flexboxstickyfooterreact'>read more...</Link>
						</p>
					</div>
					<div className="post">
						<ul className="post-tags">
							<li>
								<Link to='/articles/importingimagesreact'>images</Link>
							</li>
							<li>
								<Link to='/articles/importingimagesreact'>react</Link>
							</li>
						</ul>
						<h2>
							<Link to='/articles/importingimagesreact'>importing images in react</Link>
						</h2>
						<p>
								first i want to talk about what webpack tools you need in order to be able to add images to your React application. it's not just about what you need to do with React. if your workflow emanates from
						</p>
						<p className="post-read-more-link">
							<Link to='/articles/importingimagesreact'>read more...</Link>
						</p>
					</div>
					<div className="post">
						<ul className="post-tags">
							<li>
								<Link to='/articles/myfirstpresentation'>workflows</Link>
							</li>
							<li>
								<Link to='/articles/myfirstpresentation'>react</Link>
							</li>
						</ul>
						<h2>
							<Link to='/articles/myfirstpresentation'>my first presentation</Link>
						</h2>
						<p>
								tonight i gave my first tech presentation (ever), and it was about creating your own React workflow without using create-react-app. i was nervous at first, but then after a minute or two, i relaxed a
						</p>
						<p className="post-read-more-link">
							<Link to='/articles/myfirstpresentation'>read more...</Link>
						</p>
					</div>
					<div className="post">
						<ul className="post-tags">
							<li>
								<Link to='/articles/jestreactmocks'>jest</Link>
							</li>
							<li>
								<Link to='/articles/jestreactmocks'>mocks</Link>
							</li>
						</ul>
						<h2>
							<Link to='/articles/jestreactmocks'>jest, react, and mocks</Link>
						</h2>
						<p>
								i use facebook's jest to test my react applications. yesterday, i ran a test to make sure that the changes i made to my Work component passed in my portfolio react app. it did not! but as indicated in
						</p>
						<p className="post-read-more-link">
							<Link to='/articles/jestreactmocks'>read more...</Link>
						</p>
					</div>
				</ul>

			</section>
			<Switch>
				<Route path='/localstorage' component={LocalStorage}/>
				<Route path='/rockinsynth' component={RockinSynth}/>
				<Route path='/jscssclock' component={JsCssClock}/>
			</Switch>
		</div>
	</HashRouter>
);

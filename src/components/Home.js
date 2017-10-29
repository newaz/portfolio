import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import {LocalStorage} from './LocalStorage';
import {RockinSynth} from './RockinSynth';
import {JsCssClock} from './JsCssClock';

import {FeaturedProjects} from './FeaturedProjects';
import {FeaturedPosts} from './FeaturedPosts';

import {FlexboxStickyFooterReact} from './FlexboxStickyFooterReact';
import {ImportingImagesReact} from './ImportingImagesReact';
import {FirstPresentation} from './FirstPresentation';
import {JestReactMocks} from './JestReactMocks';

export const Home = () => {
	return (
		<HashRouter>
			<div className="Home-content">
				<section className="home-section-projects">
					<h2>featured projects</h2>
					<ul className="project-list-home">
						<FeaturedProjects />
					</ul>
				</section>
				<section className="home-section-articles .home-section-last">
					<h2>featured articles</h2>
					<ul className="post-list-home">
						<FeaturedPosts />
					</ul>
				</section>
				<Switch>
					<Route path='/localstorage' component={LocalStorage}/>
					<Route path='/rockinsynth' component={RockinSynth}/>
					<Route path='/jscssclock' component={JsCssClock}/>
					<Route path='/flexboxstickyfooterreact' component={FlexboxStickyFooterReact}/>
					<Route path='/articles/importingimagesreact' component={ImportingImagesReact}/>
					<Route path='/articles/importingimagesreact' component={ImportingImagesReact}/>
					<Route path='/articles/myfirstpresentation' component={FirstPresentation}/>
				</Switch>
			</div>
		</HashRouter>
	);
}

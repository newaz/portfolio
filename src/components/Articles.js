import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import {JestReactMocks} from './JestReactMocks';
import {FlexboxStickyFooterReact} from './FlexboxStickyFooterReact';
import {ImportingImagesReact} from './ImportingImagesReact';
import {FirstPresentation} from './FirstPresentation';

export const Articles = () => {
	return (
		<HashRouter basename="/portfolio-react">
			<div className="Articles-content">
				<h2>articles</h2>
				<ul className="articles-nav">
					<CustomLink to='/jest-react-mocks' activeClassName='active' label='jest, react, and mocks'/>
					<CustomLink to='/flexbox-sticky-footer-react' activeClassName='active' label='flexbox, sticky footer, and react'/>
					<CustomLink to='/importing-images-react' activeClassName='active' label='importing images in react'/>
					<CustomLink to='/my-first-presentation' activeClassName='active' label='my first presentation'/>
				</ul>
				<Switch>
					<Route path='/jest-react-mocks' component={JestReactMocks}/>
					<Route path='/flexbox-sticky-footer-react' component={FlexboxStickyFooterReact}/>
					<Route path='/importing-images-react' component={ImportingImagesReact}/>
					<Route path='/my-first-presentation' component={FirstPresentation}/>
				</Switch>
			</div>
		</HashRouter>
	);
}

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<div className={match ? 'active' : ''}>
			{match ? label : ''}<Link to={to}>{label}</Link>
		</div>
	)}/>
)

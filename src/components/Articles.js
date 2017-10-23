import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import {JestReactMocks} from './JestReactMocks';
import {FlexboxStickyFooterReact} from './FlexboxStickyFooterReact';
import {ImportingImagesReact} from './ImportingImagesReact';
import {FirstPresentation} from './FirstPresentation';

export const Articles = () => {
	return (
		<HashRouter basename="/articles">
			<div className="Articles-content">
				<h2>articles</h2>
				<ul className="articles-nav">
					<CustomLink to='/jestreactmocks' activeClassName='active' label='jest, react, and mocks'/>
					<CustomLink to='/flexboxstickyfooterreact' activeClassName='active' label='flexbox, sticky footer, and react'/>
					<CustomLink to='/importingimagesreact' activeClassName='active' label='importing images in react'/>
					<CustomLink to='/myfirstpresentation' activeClassName='active' label='my first presentation'/>
				</ul>
				<Switch>
					<Route path='/jestreactmocks' component={JestReactMocks}/>
					<Route path='/flexboxstickyfooterreact' component={FlexboxStickyFooterReact}/>
					<Route path='/importingimagesreact' component={ImportingImagesReact}/>
					<Route path='/myfirstpresentation' component={FirstPresentation}/>
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

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {JestReactMocks} from './JestReactMocks';
import {FlexboxStickyFooterReact} from './FlexboxStickyFooterReact';

export const Articles = () => {
	return (
		<Router>
			<div className="Articles-content">
				<h2>articles</h2>
				<ul className="articles-nav">
					<CustomLink to='/jest-react-mocks' activeClassName='active' label='jest, react, and mocks'/>
					<CustomLink to='/flexbox-sticky-footer-react' activeClassName='active' label='flexbox, sticky footer, and react'/>
				</ul>
				<Switch>
					<Route path='/jest-react-mocks' component={JestReactMocks}/>
					<Route path='/flexbox-sticky-footer-react' component={FlexboxStickyFooterReact}/>
				</Switch>
			</div>
		</Router>
	);
}

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<div className={match ? 'active' : ''}>
			{match ? label : ''}<Link to={to}>{label}</Link>
		</div>
	)}/>
)

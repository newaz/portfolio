import React from 'react';
import {Route, Link} from 'react-router-dom';

export const CustomNavLink = ({label, to, activeOnlyWhenExact}) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<div className={match ? 'active' : ''}>
			{match ? '> ' : ''}<Link to={to}>{label}</Link>
		</div>
	)}/>
)

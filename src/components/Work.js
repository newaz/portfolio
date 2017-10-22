import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {LocalStorage} from './LocalStorage';
import {RockinSynth} from './RockinSynth';
import {JsCssClock} from './JsCssClock';
import {SimpleWeather} from './SimpleWeather';
import {TravelAgencySite} from './TravelAgencySite';
import {RandomQuoteMachine} from './RandomQuoteMachine';
import {WikipediaViewer} from './WikipediaViewer';
import {BSurreal} from './BSurreal';
import {Classiscare} from './Classiscare';

export const Work = () => {
	return (
		<Router>
			<div className="Work-content">
				<h2>projects</h2>
				<ul className="work-nav">
					<CustomLink to='/localstorage' activeClassName='active' label='local-storage'/>
					<CustomLink to='/rockinsynth' activeClassName='active' label='rockin-synth'/>
					<CustomLink to='/jscssclock' activeClassName='active'  label='js-css-clock'/>
					<CustomLink to='/simpleweather' activeClassName='active'  label='simple-weather'/>
					<CustomLink to='/travelagencysite' activeClassName='active' label='travel-agency-site'/>
					<CustomLink to='/randomquotemachine' activeClassName='active' label='random-quote-machine'/>
					<CustomLink to='/wikipediaviewer' activeClassName='active' label='wikipedia-viewer'/>
					<CustomLink to='/bsurreal' activeClassName='active' label='bsurreal'/>
					<CustomLink to='/classiscare' activeClassName='active' label='classiscare'/>
				</ul>
				<Switch>
					<Route path='/localstorage' component={LocalStorage}/>
					<Route path='/rockinsynth' component={RockinSynth}/>
					<Route path='/jscssclock' component={JsCssClock}/>
					<Route path='/simpleweather' component={SimpleWeather}/>
					<Route path='/travelagencysite' component={TravelAgencySite}/>
					<Route path='/randomquotemachine' component={RandomQuoteMachine}/>
					<Route path='/wikipediaviewer' component={WikipediaViewer}/>
					<Route path='/bsurreal' component={BSurreal}/>
					<Route path='/classiscare' component={Classiscare}/>
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

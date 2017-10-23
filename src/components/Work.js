import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
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
		<HashRouter basename="/portfolio-react">
			<div className="Work-content">
				<h2>projects</h2>
				<ul className="work-nav">
					<CustomLink to='/local-storage' activeClassName='active' label='local storage'/>
					<CustomLink to='/rockin-synth' activeClassName='active' label='rockin synth'/>
					<CustomLink to='/js-css-clock' activeClassName='active'  label='js css clock'/>
					<CustomLink to='/simple-weather' activeClassName='active'  label='simple weather'/>
					<CustomLink to='/travel-agency-site' activeClassName='active' label='travel agency site'/>
					<CustomLink to='/random-quote-machine' activeClassName='active' label='random quote machine'/>
					<CustomLink to='/wikipedia-viewer' activeClassName='active' label='wikipedia viewer'/>
					<CustomLink to='/bsurreal' activeClassName='active' label='bsurreal'/>
					<CustomLink to='/classiscare' activeClassName='active' label='classiscare'/>
				</ul>
				<Switch>
					<Route path='/local-storage' component={LocalStorage}/>
					<Route path='/rockin-synth' component={RockinSynth}/>
					<Route path='/js-css-clock' component={JsCssClock}/>
					<Route path='/simple-weather' component={SimpleWeather}/>
					<Route path='/travel-agency-site' component={TravelAgencySite}/>
					<Route path='/random-quote-machine' component={RandomQuoteMachine}/>
					<Route path='/wikipedia-viewer' component={WikipediaViewer}/>
					<Route path='/bsurreal' component={BSurreal}/>
					<Route path='/classiscare' component={Classiscare}/>
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

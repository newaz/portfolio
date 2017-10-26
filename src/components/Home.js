import React from 'react';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactSiema from 'react-siema';

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

const Slide = (props) => (
	<img {...props} alt="slide" />
);

const options = {
	selector: '.siema',
	easing: 'ease-out',
	duration: 25,
	loop: true,
	draggable: true,
	perPage: 1
}

export const Home = () => {
	let slider
	return (
		<Router basename="/">
			<div className="Home-content">
				<h2 className="home-work-heading">work</h2>
				<div className="siema">
					<ReactSiema ref={siema => slider = siema} {...options}>
						<div>
							<Slide src={localStorage}/>
							<Link to='/work/localstorage' ><h2>local storage</h2></Link>
						</div>
						<div>
							<Slide src={rockinSynth}/>
							<Link to='/work/rockinsynth' ><h2>rockin' synth</h2></Link>
						</div>
						<div>
							<Slide src={jsCssClock}/>
							<Link to='/work/jscssclock'><h2>js css clock</h2></Link>
						</div>
						<div>
							<Slide src={simpleWeather}/>
							<Link to='/work/simpleweather'><h2>simple weather</h2></Link>
						</div>
						<div>
							<Slide src={travelAgencySite}/>
							<Link to='/work/travelagencysite'><h2>travel agency site</h2></Link>
						</div>
						<div>
							<Slide src={randomQuoteMachine}/>
							<Link to='/work/randomquotemachine'><h2>random quote machine</h2></Link>
						</div>
						<div>
							<Slide src={wikipediaViewer}/>
							<Link to='/work/wikipediaviewer'><h2>wikipedia viewer</h2></Link>
						</div>
						<div>
							<Slide src={bsurreal}/>
							<Link to='/work/bsurreal'><h2>bsurreal</h2></Link>
						</div>
						<div>
							<Slide src={classiscare}/>
							<Link to='/work/classiscare'><h2>classiscare</h2></Link>
						</div>
					</ReactSiema>
					<button className="prevSiema2" onClick={() => slider.prev()}>☞</button>
					<button className="nextSiema2" onClick={() => slider.next()}>☞</button>
				</div>
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

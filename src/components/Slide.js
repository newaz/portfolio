import React, {Component} from 'react';

import data from '../lib/carouselHelpers';

import localStorage from '../../images/work/localStorage.jpg';
import rockinSynth from '../../images/work/rockinSynth.jpg';
import jsCssClock from '../../images/work/jsCssClock.jpg';
import simpleWeather from '../../images/work/simpleWeather.jpg';
import travelAgencySite from '../../images/work/travelAgencySite.jpg';
import randomQuoteMachine from '../../images/work/randomQuoteMachine.jpg';
import wikipediaViewer from '../../images/work/wikipediaViewer.jpg';
import bsurreal from '../../images/work/bsurreal.jpg';
import classiscare from '../../images/work/classiscare.jpg';

class Slide extends Component {
	render() {
		const {id, name, title, caption, tag, src} = this.props;
		return (
			<div className="slide">{title}</div>
		)
	}
}

export default Slide;

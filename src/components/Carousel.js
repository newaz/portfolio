import React, {Component} from 'react';

import Slide from './Slide';

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

import scrollTo from '../lib/scrollToAnimate';

class Carousel extends Component {
	constructor(props) {
		super(props);
	}
	handleLeftNav = (e) => {
		e.preventDefault();
		console.log('left clicked', this);
	}
	handleRightNav = (e) => {
		e.preventDefault();
		console.log('right clicked', this);
		const {carouselViewport} = this.refs;
		const numOfSlidesToScroll = 1.5;
		const widthOfSlide = 600;
		const newPos = carouselViewport.scrollLeft + (numOfSlidesToScroll * widthOfSlide);
		const timeToMoveOneSlide = 200;
		const totalTimeToMove = Math.min((numOfSlidesToScroll * timeToMoveOneSlide));
		carouselViewport.scrollLeft = newPos;
		scrollTo(carouselViewport, newPos, 200, 'scrollLeft');
	}
	renderSlides() {
		return data.projects.project.map((state) => {
			return (
				<Slide
					key={state.id}
					name={state.name}
					title={state.title}
					tag={state.tag}
					src={state.src}
				/>);
		})
	}
	render() {
		return (
			<div className="carousel-container">
				<button className="carousel-nav carousel-left-nav"
					onClick={this.handleLeftNav}>☞</button>
				<div className="carousel-viewport" ref="carouselViewport">
					{this.renderSlides()}
				</div>
				<button className="carousel-nav carousel-right-nav" onClick={this.handleRightNav}>☞</button>
			</div>
		)
	}
}

export default Carousel;

import React, {Component} from 'react';

import localStorage from '../../images/work/localStorage.jpg';
import simpleWeather from '../../images/work/simpleWeather.jpg';
import wikipediaViewer from '../../images/work/wikipediaViewer.jpg';
import rockinSynth from '../../images/work/rockinSynth.jpg';
import travelAgencySite from '../../images/work/travelAgencySite.jpg';
import bsurreal from '../../images/work/bsurreal.jpg';
import jsCssClock from '../../images/work/jsCssClock.jpg';
import randomQuoteMachine from '../../images/work/randomQuoteMachine.jpg';
import classiscare from '../../images/work/classiscare.jpg';

export class Work extends Component {
	render() {
		const images = [
			{id: 1, caption: "local storage", tag: "local storage", src: localStorage },
			{id: 2, caption: "rockin synth", tag: "audio", src: rockinSynth },
			{id: 3, caption: "js css clock", tag: "time", src: jsCssClock },
			{id: 4, caption: "simple weather", tag: "api", src: simpleWeather },
			{id: 5, caption: "travel agency site", tag: "website", src: travelAgencySite },
			{id: 6, caption: "random quote machine", tag: "api", src: randomQuoteMachine },
			{id: 7, caption: "wikipedia viewer", tag: "search api", src: wikipediaViewer},
			{id: 8, caption: "bsurreal", tag: "trivia game", src: bsurreal },
			{id: 9, caption: "classiscare", tag: "libraries", src: classiscare }
		].map((mappedImage) =>
			<div key={mappedImage.id} className="project">
				<ul className="project-tags">
					<li>
						<a href="">{mappedImage.tag}</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={mappedImage.src} alt="Thumbnail for" />
						<figcaption className="project-caption">{mappedImage.caption}</figcaption>
					</figure>
				</a>
			</div>
		);
		return (
			<div className="Work-content">
				<ul className="project-list">
					<div className="project">
						{images}
					</div>
				</ul>
			</div>
		);
	}
}

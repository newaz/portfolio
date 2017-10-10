import React from 'react';
import {Link} from 'react-router-dom';

import localStorage from '../../images/work/localStorage.jpg';
import simpleWeather from '../../images/work/simpleWeather.jpg';
import wikipediaViewer from '../../images/work/wikipediaViewer.jpg';
import rockinSynth from '../../images/work/rockinSynth.jpg';
import travelAgencySite from '../../images/work/travelAgencySite.jpg';
import bsurreal from '../../images/work/bsurreal.jpg';
import jsCssClock from '../../images/work/jsCssClock.jpg';
import randomQuoteMachine from '../../images/work/randomQuoteMachine.jpg';
import classiscare from '../../images/work/classiscare.jpg';


export const Work = () => (
	<div className="Work-content">
		<ul className="project-list">
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={localStorage} alt="local storage" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={simpleWeather} alt="simple weather" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={wikipediaViewer} alt="wikipedia viewer" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={rockinSynth} alt="wikipedia viewer" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={travelAgencySite} alt="travel agency site" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={bsurreal} alt="bsurreal movie trivia game" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={jsCssClock} alt="JS CSS Clock" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={randomQuoteMachine} alt="random quote machine" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
			<ul className="project-tags">
				<li>
					<a href="">tag</a>
				</li>
			</ul>
			<li className="project">
				<a href="">
					<figure>
						<img className="responsive-image" src={classiscare} alt="classiscare horror movie site" />
						<figcaption className="project-caption"></figcaption>
					</figure>
				</a>
			</li>
		</ul>
	</div>
);

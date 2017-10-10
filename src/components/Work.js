import React from 'react';

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
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={localStorage} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={simpleWeather} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={wikipediaViewer} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={rockinSynth} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={travelAgencySite} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={bsurreal} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={jsCssClock} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={randomQuoteMachine} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
			<li className="project">
				<ul className="project-tags">
					<li>
						<a href="">tag</a>
					</li>
				</ul>
				<a href="">
					<figure>
						<img className="responsive-image" src={classiscare} alt="Thumbnail for" />
						<figcaption class="project-caption">caption</figcaption>
					</figure>
				</a>
			</li>
		</ul>
	</div>
);

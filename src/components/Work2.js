import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import localStorage from '../../images/work/localStorage.jpg';
import simpleWeather from '../../images/work/simpleWeather.jpg';
import wikipediaViewer from '../../images/work/wikipediaViewer.jpg';
import rockinSynth from '../../images/work/rockinSynth.jpg';
import travelAgencySite from '../../images/work/travelAgencySite.jpg';
import bsurreal from '../../images/work/bsurreal.jpg';
import jsCssClock from '../../images/work/jsCssClock.jpg';
import randomQuoteMachine from '../../images/work/randomQuoteMachine.jpg';
import classiscare from '../../images/work/classiscare.jpg';

import LocalStorage from './LocalStorage';

export const Work = ({routes}) => {

	const project1 = [
		{
			id: 1,
			caption: "local storage",
			tag: "local storage",
			src: localStorage
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project2 = [
		{
			id: 2,
			caption: "rockin synth",
			tag: "audio",
			src: rockinSynth
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project3 = [
		{
			id: 3,
			caption: "js css clock",
			tag: "time",
			src: jsCssClock
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project4 = [
		{
			id: 4,
			caption: "simple weather",
			tag: "api",
			src: simpleWeather
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project5 = [
		{
			id: 5,
			caption: "travel agency site",
			tag: "website",
			src: travelAgencySite
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project6 = [
		{
			id: 6,
			caption: "random quote machine",
			tag: "api",
			src: randomQuoteMachine
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project7 = [
		{
			id: 7,
			caption: "wikipedia viewer",
			tag: "search api",
			src: wikipediaViewer
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project8 = [
		{
			id: 8,
			caption: "bsurreal",
			tag: "trivia game",
			src: bsurreal
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	const project9 = [
		{
			id: 9,
			caption: "classiscare",
			tag: "libraries",
			src: classiscare
		}
	].map((project1Data) => <div key={project1Data.id} className="project">
		<ul className="project-tags">
			<li>
				<div className="project-tag">{project1Data.tag}</div>
			</li>
		</ul>
		<div>
			<figure>
				<img className="responsive-image" src={project1Data.src} alt="Thumbnail for"/>
				<figcaption className="project-caption">{project1Data.caption}</figcaption>
			</figure>
		</div>
	</div>);
	return (
		<div className="Work-content">
			<ul className="project-list">
				<li className="project">{project1}</li>
				<li className="project">{project2}</li>
				<li className="project">{project3}</li>
				<li className="project">{project4}</li>
				<li className="project">{project5}</li>
				<li className="project">{project6}</li>
				<li className="project">{project7}</li>
				<li className="project">{project8}</li>
				<li className="project">{project9}</li>
			</ul>

		</div>
	);
}

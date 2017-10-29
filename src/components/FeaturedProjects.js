import React from 'react';
import {Link} from 'react-router-dom';

import localStorage from '../../images/work/localStorage.jpg';
import rockinSynth from '../../images/work/rockinSynth.jpg';
import jsCssClock from '../../images/work/jsCssClock.jpg';

export const FeaturedProjects = () => {
	return (
		[
			{	id: 1,
				tagName: 'local-storage',
				linkPath: '/work/localstorage',
				src: localStorage,
				projectCaption: 'local storage'
			},
			{
				id: 2,
				tagName: ['audio', 'music'],
				linkPath: '/work/rockinsynth',
				src: rockinSynth,
				projectCaption: 'rockin\' synth'
			},
			{	id: 3,
				tagName: 'time',
				linkPath: '/work/jscssclock',
				src: jsCssClock,
				projectCaption: 'js css clock'
			}
		].map((featuredProject) => {
			return (
				<div key={featuredProject.id}>
					<li className="project">
						<Link to={featuredProject.linkPath}>
							<div className="tag">
								{featuredProject.tagName}
							</div>
						</Link>
						<img className="project-image-home" src={featuredProject.src}/>
						<figcaption className="project-caption">
							<Link to={featuredProject.linkPath}>{featuredProject.projectCaption}</Link>
						</figcaption>
					</li>
				</div>
			)
		})
	)
}

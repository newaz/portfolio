import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import NavLink from './nav_link';
import{Main} from './Main';
import {burgerToggle} from '../lib/navHelpers';


export const Header = () => (
	<header>
		<nav>
			<div className="topNavNarrow">
				<i className="hamburger" onClick={burgerToggle}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</i>
				<ul className="topNarrowLinks">
					<li><NavLink to='/'>home</NavLink></li>
					<li><NavLink to='/about'>about</NavLink></li>
					<li><NavLink to='/work'>work</NavLink></li>
					<li><NavLink to='/calendar'>ecal</NavLink></li>
					<li><NavLink to='/skills'>skills</NavLink></li>
					<li><NavLink to='/contact'>contact</NavLink></li>
				</ul>
			</div>
			<div className="topNavWide">
				<ul className="topWideUl">
					<li><NavLink to='/contact'>contact</NavLink></li>
					<li><NavLink to='/skills'>skills</NavLink></li>
					<li><NavLink to='/calendar'>ecal</NavLink></li>
					<li><NavLink to='/work'>work</NavLink></li>
					<li><NavLink to='/about'>about</NavLink></li>
					<li><NavLink to='/'>home</NavLink></li>
				</ul>
			</div>
		</nav>
	</header>
)

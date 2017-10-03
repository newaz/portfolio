import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import{Main} from './Main';
import {burgerToggle} from '../lib/navHelpers';


export const Header = () => (
	<header>
		<nav>
			<div className="topNavWide">
				<ul className="topWideUl">
					<li><Link to='/contact'>contact</Link></li>
					<li><Link to='/skills'>skills</Link></li>
					<li><Link to='/calendar'>ecal</Link></li>
					<li><Link to='/work'>work</Link></li>
					<li><Link to='/about'>about</Link></li>
					<li><Link to='/'>home</Link></li>
				</ul>
			</div>
			<div className="topNavNarrow">
				<i className="hamburger" onClick={burgerToggle}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</i>
				<ul className="topNarrowLinks">
					<li><Link to='/'>home</Link></li>
					<li><Link to='/about'>about</Link></li>
					<li><Link to='/work'>work</Link></li>
					<li><Link to='/calendar'>ecal</Link></li>
					<li><Link to='/skills'>skills</Link></li>
					<li><Link to='/contact'>contact</Link></li>
				</ul>
			</div>
		</nav>
	</header>
)

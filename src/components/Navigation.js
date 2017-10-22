import React, {Component} from 'react';
import {burgerToggle} from '../lib/navHelpers';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Home} from './Home';
import {About} from './About';
import {Work} from './Work';
import {Calendar} from './Calendar';
import {Skills} from './Skills';
import {Contact} from './Contact';
import {Articles} from './Articles';

export const Navigation = () => (
	<Router>
		<div className="nav-container">
			<div className="hamburger" onClick={burgerToggle}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<header className="gradient-bar">
				<nav className="responsive-menu">
					<div className="brand"><a href="#!">maria d. campbell</a></div>
					<ul className="nav-list" onClick={burgerToggle}>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/'>home</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/about'>about</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/work'>work</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/articles'>articles</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/calendar'>ecal</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/skills'>skills</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/contact'>contact</NavLink></li>
					</ul>
				</nav>
				<nav className="top">
					<div className="brand"><a href="#!">maria d. campbell</a></div>
					<ul>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/'>home</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/about'>about</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/work'>work</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/articles'>articles</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/calendar'>calendar</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/skills'>skills</NavLink></li>
						<li><NavLink activeClassName='active' activeStyle={{
							color: '#cd6090' }} exact to='/contact'>contact</NavLink></li>
					</ul>
				</nav>
			</header>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/about' component={About}/>
				<Route path='/work' component={Work}/>
				<Route path='/articles' component={Articles}/>
				<Route path='/calendar' component={Calendar}/>
				<Route path='/skills' component={Skills}/>
				<Route path='/contact' component={Contact}/>
			</Switch>
		</div>
	</Router>
);

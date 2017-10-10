import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {burgerToggle} from '../lib/navHelpers';
import {Home} from './Home';
import {About} from './About';
import {Work} from './Work';
import {Calendar} from './Calendar';
import {Skills} from './Skills';
import {Contact} from './Contact';

export const Header = () => (
	<Router>
		<div>
			<header>
				<nav>
					<div className="topNavNarrow">
						<i className="hamburger" onClick={burgerToggle}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</i>
						<ul className="topNarrowLinks">
							<li><CustomMenuLink activeOnlyWhenExact={true} to='/' label="home"/></li>
							<li><CustomMenuLink to='/about' label="about"/></li>
							<li><CustomMenuLink to='/work' label="work"/></li>
							<li><CustomMenuLink to='/calendar' label="ecal"/></li>
							<li><CustomMenuLink to='/skills' label="skills"/></li>
							<li><CustomMenuLink to='/contact' label="contact"/></li>
						</ul>
					</div>
					<div className="topNavWide">
						<ul className="topWideUl">
							<li><CustomMenuLink to='/contact' label="contact"/></li>
							<li><CustomMenuLink to='/skills' label="skills"/></li>
							<li><CustomMenuLink to='/calendar' label="ecal"/></li>
							<li><CustomMenuLink to='/work' label="work"/>
							</li>
							<li><CustomMenuLink to='/about' label="about"/></li>
							<li><CustomMenuLink activeOnlyWhenExact={true} to='/' label="home"/></li>
						</ul>
					</div>
				</nav>
			</header>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/work" component={Work}/>
			<Route path="/calendar" component={Calendar}/>
			<Route path="/skills" component={Skills}/>
			<Route path="/contact" component={Contact}/>
		</div>
	</Router>
)

const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<div className={match ? 'active' : ''}>
			{match ? label : ''}<Link to={to}>{label}</Link>
		</div>
	)}/>
)

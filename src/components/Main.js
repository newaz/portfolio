import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Calendar} from './Calendar';
import {Work} from './Work';
import {Skills} from './Skills';

export const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
			<Route exact path='/calendar' component={Calendar}/>
			<Route exact path='/work' component={Work}/>
			<Route exact path='/skills' component={Skills}/>
		</Switch>
	</main>
)

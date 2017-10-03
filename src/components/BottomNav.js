import React, { Component } from 'react';
import {Link} from './router';

class NavBottom extends Component {
	render() {
		return (
			<div className="Nav-bottom">
				<LINK to='/facebook'>Facebook</LINK>
				<LINK to='/github'>Github</LINK>
				<LINK to='/Linkedin'>Linkedin</LINK>
				<LINK to='twitter'>Twitter</LINK>
			</div>
		)
	}
}

export default NavBottom;

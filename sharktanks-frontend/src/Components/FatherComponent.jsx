import React, { Component } from 'react';
import Test from './TestComponent.jsx';

class Father extends Component {
	render() {
		return (<Test/>);
	}
}


export default Father;
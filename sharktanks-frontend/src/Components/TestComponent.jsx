import React, { Component } from 'react';
import axios from 'axios'

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		// var test = this.state.value
		axios.post('http://localhost:8080/postData', { query: this.state.value } )
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (response) {
				console.log(response);
			})

		console.log(this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					SQL Query &nbsp;
          			<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Test;
import React, { Component } from 'react';
import axios from 'axios'

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '',
						word: ''};

		this.handleIDChange = this.handleIDChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleWordChange = this.handleWordChange.bind(this);
	}

	handleIDChange(event) {
		console.log(event.target);
		this.setState({ value: event.target.value });
		console.log(this.state.value);
	}

	handleWordChange(event) {
		console.log(event.target);
		this.setState({word: event.target.value });
		console.log(this.state.word);
	}

	handleSubmit(event) {
		axios.post('http://localhost:8080/postData', { statusId: this.state.value,
											  		   statusWord: this.state.word } )
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (response) {
				console.log(response.data);
			})

		console.log(this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Status ID &nbsp;
	          			<input type="text" value={this.state.value} onChange={this.handleIDChange} />
					</label>
					<label>
						Status Word &nbsp;
						<input type="text" value={this.state.word} onChange={this.handleWordChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>

		);
	}
}

export default Test;
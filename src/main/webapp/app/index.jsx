import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}

	handleChange(event) {
    	this.setState({[event.target.name]: event.target.value});
	}

	login() {
		axios.post('/getDetails', {
			username: this.state.username,
			password: this.state.password
		})
		.then(response => {
			this.setState({ user : response.data});
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return (
				<div>
					<label>Username : </label>
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input><br/><br/>
					<label>Password : </label>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input><br/><br/>
					<input type="submit" value="Login" onClick={this.login}></input><br/><br/>
		
					<div>
						<label>User id : </label>
						<label><b>{this.state.user.id}</b></label><br/><br/>
						<label disabled>Firstname : </label>
						<label><b>{this.state.user.firstName}</b></label><br/><br/>
						<label>Lastname : </label>
						<label><b>{this.state.user.lastName}</b></label><br/><br/>
						<label>Email : </label>
						<label><b>{this.state.user.email}</b></label><br/><br/>
						<label>Address : </label>
						<label><b>{this.state.user.address}</b></label>
					</div>
				</div>						
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('index'));
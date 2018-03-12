import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
var axios = require('axios');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: {}};
	}

	componentDidMount() {
		console.log('in app.jsx');
		axios.get('/getDetails')
		  .then(function (response) {
            console.log(response);
            this.setState({user: response.data});
          })
          .catch(function (error) {
            console.log(error);
          });;
	}

	render() {
		return (
            <h1>User id : {this.props.user.id}</h1>
			//<User user={this.state.user}/>
		)
	}
}

render(<App/>, document.getElementById('app'));
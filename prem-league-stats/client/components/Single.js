import React from 'react'
import {Link} from 'react-router';

class Single extends React.Component {
	
	constructor(props) {
		super();
		this.state = {
			buttonPressed: false
		};
	}
	
	clickME() {
		if(this.state.buttonPressed) {
			return (
				<span>U clicked me u punk</span>
			)
		}
	}
	
	_onClick() {
		this.setState({
			buttonPressed: true
		})
	}
	
	render() {
		return (
			<div className="single-photo">
				Player 1
				<Link to="google.com">
					<img src="http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/Photo-Missing.png"/>
					Link to pornhub
				</Link>
				{this.clickME()}
				<button onClick={this._onClick.bind(this)}>Click this?</button>
			</div>
		)
	}
}

export default Single;

import React, { Component } from 'react';

import BoatDataService from '../services/BoatDataService.js'

class BoatComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			boat: this.props.boat
		}
		this.updateButtonClicked = this.updateButtonClicked.bind(this)
		this.deleteButtonClicked = this.deleteButtonClicked.bind(this)
	}

	updateButtonClicked() {
		/*var data = {
	      	name: this.state.boat.name,
	      	description: this.state.boat.description
	    };
	    BoatDataService.createBoat(data)*/
	}

	deleteButtonClicked() {
	    BoatDataService.removeBoat(this.state.boat.id)
	}

	render() {
		return (
			<>
			<div className="row" style={{height:"86px",width:"100%"}}>
				<div className="col-1 my-auto">{this.state.boat.id}</div>
				<div className="col-2 my-auto">{this.state.boat.name}</div>
				<div className="col-6 my-auto">{this.state.boat.description}</div>
				<div className="col-2 my-auto">
					<button className="btn btn-primary btn-block my-4" onClick={this.updateButtonClicked}>Modify</button>
				</div>
				<div className="col-1 my-auto">
					<button className="btn btn-danger btn-block my-4" onClick={this.deleteButtonClicked}>X</button>
				</div>
			</div>
			<hr className="m-0" />
			</>
		)
	}
}

export default BoatComponent
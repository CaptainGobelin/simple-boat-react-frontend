import React, { Component } from 'react';

import BoatDataService from '../services/BoatDataService.js'

class BoatComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			boat: this.props.boat,
			new_name: this.props.boat.name,
			new_description: this.props.boat.description
		}
		this.handleChange = this.handleChange.bind(this)
		this.updateButtonClicked = this.updateButtonClicked.bind(this)
		this.deleteButtonClicked = this.deleteButtonClicked.bind(this)
	}

	handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

	updateButtonClicked() {
		var data = {
	      	name: this.state.new_name,
	      	description: this.state.new_description
	    };
	    BoatDataService.updateBoat(data, this.state.boat.id)
	}

	deleteButtonClicked() {
	    BoatDataService.removeBoat(this.state.boat.id)
	}

	render() {
		return (
			<>
			<div className="row" style={{height:"86px",width:"100%"}}>
				<input type='checkbox' style={{display: 'none'}} id={"cb-"+this.state.boat.id} defaultChecked={true} />
				<label htmlFor={"cb-"+this.state.boat.id}className="btn btn-primary m-4"></label>
				<div className="edit-boat bg-light">
						<div className="row" style={{height:"86px",width:"100%"}}>
						<div className="col-3 my-auto"/>
						<div className="col-2 my-auto p-0">
							<input type="text" className="form-control" placeholder="Name" name="new_name" value={this.state.new_name} onChange={this.handleChange} />
						</div>
						<div className="col-5 my-auto">
							<textarea className="form-control" rows="2" name="new_description" value={this.state.new_description} onChange={this.handleChange}></textarea>
						</div>
						<div className="col-2 my-auto">
							<button className="btn btn-success btn-block my-4" onClick={this.updateButtonClicked}>Confirm</button>
						</div>
					</div>
				</div>
				<div className="col-2 my-auto"/>
				<div className="col-1 my-auto">{this.state.boat.id}</div>
				<div className="col-2 my-auto">{this.state.boat.name}</div>
				<div className="col-6 my-auto">{this.state.boat.description}</div>
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
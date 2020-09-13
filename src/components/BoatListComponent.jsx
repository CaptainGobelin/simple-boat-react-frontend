import React, { Component } from 'react';

import BoatComponent from './BoatComponent.jsx'
import BoatDataService from '../services/BoatDataService.js'
import LoginService from '../services/LoginService.js'

class BoatListComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			boats:[],
			message: null,
			boat_name: "",
			boat_description: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.refreshBoats = this.refreshBoats.bind(this)
		this.addButtonClicked = this.addButtonClicked.bind(this)
	}

	handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

	componentDidMount() {
		this.refreshBoats();
	}

	refreshBoats() {
		BoatDataService.retrieveAllBoats().then(response => {
			this.setState({boats: response.data, message: "success"})
		}).catch(() => {
			LoginService.logout()
		})
	}

	addButtonClicked() {
		var data = {
	      	name: this.state.boat_name,
	      	description: this.state.boat_description
	    };
	    BoatDataService.createBoat(data)
	}

	render() {
		return (
			<div className="container">
				<div className="table">
					<h3>All boats</h3>
					<hr className="m-0" />
					{
						this.state.boats.map(boat =>
							<BoatComponent boat={boat} key={boat.id} />
						)
					}
					<div className="row" style={{height:"86px",width:"100%"}}>
						<div className="col-1 my-auto">#</div>
						<div className="col-2 my-auto p-0">
							<input type="text" className="form-control" placeholder="Name" name="boat_name" value={this.state.boat_name} onChange={this.handleChange} />
						</div>
						<div className="col-6 my-auto">
							<textarea className="form-control" rows="2" name="boat_description" value={this.state.boat_description} onChange={this.handleChange}></textarea>
						</div>
						<div className="col-3 my-auto">
							<button className="btn btn-primary btn-block my-4" onClick={this.addButtonClicked}>Create boat</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BoatListComponent
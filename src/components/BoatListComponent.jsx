import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import BoatDataService from '../services/BoatDataService.js'
import LoginService from '../services/LoginService.js'

class BoatListComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			boats:[],
			message: null
		}
		this.refreshBoats = this.refreshBoats.bind(this)
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

	render() {
		return (
			<div className="container">
				<h3>All Boats</h3>
				<div className="container">
					<table className="table">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.boats.map(boat =>
									<tr key={boat.id}>
										<td>{boat.id}</td>
										<td>{boat.name}</td>
										<td>{boat.description}</td>
									</tr>
								)
							}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default BoatListComponent
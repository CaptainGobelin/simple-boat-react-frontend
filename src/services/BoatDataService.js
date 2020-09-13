import axios from 'axios'

const BOAT_API_URL = 'http://localhost:8080'
const DASHBOARD_API_URL = `${BOAT_API_URL}/boats-dashboard`

class BoatDataService {

	retrieveAllBoats() {
		return axios.get(`${DASHBOARD_API_URL}/boats`);
	}

	createBoat(data) {
		axios.post(`${DASHBOARD_API_URL}/add_boat`, data).then(response => {
			window.location.reload();
		}).catch(() => {
			console.log("oups")
		})
	}

	removeBoat(id) {
		axios.delete(`${DASHBOARD_API_URL}/${id}/delete`).then(response => {
			window.location.reload();
		}).catch(() => {
			console.log("oups")
		})
	}

	updateBoat(data, id) {
		axios.put(`${DASHBOARD_API_URL}/${id}/update`, data).then(response => {
			window.location.reload();
		}).catch(() => {
			console.log("oups")
		})
	}

}

export default new BoatDataService()
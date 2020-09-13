import axios from 'axios'

const BOAT_API_URL = 'http://localhost:8080'
const DASHBOARD_API_URL = `${BOAT_API_URL}/boats-dashboard`

class BoatDataService {

    retrieveAllBoats() {
        return axios.get(`${DASHBOARD_API_URL}/boats`);
    }
}

export default new BoatDataService()
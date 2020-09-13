import axios from 'axios'

const BOAT_API_URL = 'http://localhost:8080'
const LOGIN_API_URL = `${BOAT_API_URL}/auth/login`

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class LoginService {

    login(username, password) {
        return axios.get(`${LOGIN_API_URL}`, { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        let userToken = 'Basic ' + window.btoa(username + ":" + password)
        sessionStorage.setItem("USER_TOKEN", userToken)
        return userToken
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = sessionStorage.getItem("USER_TOKEN")
                }
                return config
            }
        )
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        sessionStorage.getItem("USER_TOKEN")
    }
}

export default new LoginService()
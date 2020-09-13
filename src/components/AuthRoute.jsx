import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import LoginService from '../services/LoginService';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthRoute extends Component {

    constructor(props) {
        super()
        LoginService.setupAxiosInterceptors()
    }

    render() {
        if (LoginService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}
export default AuthRoute
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import BoatListComponent from './BoatListComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import AuthRoute from './AuthRoute.jsx';
import LoginService from '../services/LoginService.js'


class BoatApp extends Component {
	render() {
			return (
            <>
                <Router>
                    <div className="container h-100" >
                        <header className="blog-header py-3 bg-primary">
                            <div className="row flex-nwrap justify-content-between align-items-center">
                                <div className="col-3" />
                                <div className="col-5 text-center">
                                    <h1 className="text-white blog-header-logo">BOATIFUL</h1>
                                </div>
                                <div className="col-3 text-right pr-5">
                                    <Link to="/login" onClick={LoginService.logout}>
                                        <button className="btn btn-danger">Logout</button>
                                    </Link>
                                </div>
                            </div>
                        </header>
                        <div className="bg-light p-5">
                            <Switch>
                                <Route path="/" exact component={LoginComponent} />
                                <Route path="/login" exact component={LoginComponent} />
                                <AuthRoute path="/boats" exact component={BoatListComponent} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </>
        )
	}
}

export default BoatApp
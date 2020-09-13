import React, { Component } from 'react';

import LoginService from '../services/LoginService.js'

class LoginComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
			loginFailed: false,
			loginSuccess: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.loginButtonClicked = this.loginButtonClicked.bind(this)
	}

	handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

	loginButtonClicked() {
		LoginService.login(this.state.username, this.state.password).then(response => {
			LoginService.registerSuccessfulLogin(this.state.username, this.state.password)
			this.props.history.push('/boats')
		}).catch(() => {
			LoginService.logout()
			this.setState({loginSuccess:false})
         	this.setState({loginFailed:true})
		})
	}

	componentDidMount() {
		LoginService.logout()
	}

	render() {
		return (
			<div className="container">
  				<div className="row justify-content-md-center">
					<div className="card col-sm-6">
						<article className="card-body">
							<h1 className="card-title text-center">Login</h1>
							<hr/>
							{this.state.loginFailed && <div className="alert alert-danger">Invalid username or password</div>}
							<div className="form-group">
								<div className="input-group py-3">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Username
										</span>
									</div>
									<input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
								</div>
								<div className="input-group py-1">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Password
										</span>
									</div>
									<input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
			                    </div>
			                    <div className="form-group">
			                    	<button className="btn btn-success btn-block my-4" onClick={this.loginButtonClicked}>Login</button>
			                    </div>
							</div>
						</article>
					</div>
				</div>
			</div>
		)
	}
}

export default LoginComponent
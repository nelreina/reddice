import React from 'react';
import axios from 'axios';

import FormField from './SignupField.js';
import Timezone from './SignupTimezone.js';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
		};
	}
	onChange(evt) {
		const { name, value } = evt.target;
		this.setState({ [name]: value });
	}
	onSubmit(evt) {
		evt.preventDefault();
		this.props.userSignupRequest(this.state);
	}
	render() {
		const { email, username, password, passwordConfirmation, timezone } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<h3>Join our community</h3>

				<FormField name="username" label="User name" onChange={this.onChange}
					value={username}
				/>

				<FormField name="email" label="Email" onChange={this.onChange}
					value={email}
				/>

				<FormField name="password" label="Password" onChange={this.onChange}
					value={password} type="password"
				/>

				<FormField name="passwordConfirmation"
					label="Confirm Password" onChange={this.onChange}
					value={passwordConfirmation} type="password"
				/>

			<Timezone onChange={this.onChange} value={timezone} />

				<div className="form-group">
					<button className="btn btn-primary btn-lg">Sign Up</button>
				</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;

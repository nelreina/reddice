import React from 'react';
import axios from 'axios';

import FormField from './SignupField.js';
import Timezone from './SignupTimezone.js';
import validateInput from '../../../lib/validation/signup';

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
			errors: {}
		};
	}
	onChange(evt) {
		const { name, value } = evt.target;
		this.setState({ [name]: value });
	}
	isValid(data) {
		const { errors, isValid } = validateInput(data);
		this.setState({ errors });
		return isValid;
	}

	onSubmit(evt) {
		evt.preventDefault();
		this.setState({ errors: {} });
		if (this.isValid(this.state)) {
			this.props.userSignupRequest(this.state).then(
				(response) => console.log(response.data),
				({response}) => this.setState({ errors: response.data })
				// (response) => this.setState()
			)
		}
		;
	}
	render() {
		const { email, username, password, passwordConfirmation, timezone, errors } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<h3>Join our community</h3>

				<FormField name="username" label="User name" onChange={this.onChange}
					value={username} error={errors.username}
				/>

				<FormField name="email" label="Email" onChange={this.onChange}
					value={email} error={errors.email}
				/>

				<FormField name="password" label="Password" onChange={this.onChange}
					value={password} type="password" error={errors.password}
				/>

				<FormField name="passwordConfirmation"
					label="Confirm Password" onChange={this.onChange}
					value={passwordConfirmation} type="password"
					error={errors.passwordConfirmation}
				/>

				<Timezone onChange={this.onChange} value={timezone} error={errors.timezone} />

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

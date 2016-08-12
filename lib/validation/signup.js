import Validator from 'validator';
import { isEmpty } from 'lodash';

const validateInput = (data) => {
	let errors = {};
	if (Validator.isNull(data.username)){
		errors.username = 'username is a required field';
	}
	if (Validator.isNull(data.email)){
		errors.email = 'email is a required field';
	}
	if (!Validator.isEmail(data.email)){
		errors.email =  errors.email || 'email address is not valid';
	}
	if (Validator.isNull(data.password)){
		errors.password = 'password is a required field';
	}
	if (Validator.isNull(data.passwordConfirmation)){
		errors.passwordConfirmation = 'passwordConfirmation is a required field';
	}
	if (!Validator.equals(data.password, data.passwordConfirmation)){
		errors.passwordConfirmation = 'password and confirmation must match';
	}

	if (Validator.isNull(data.timezone)){
		errors.timezone = 'timezone is a required field';
	}
	return { errors, isValid: isEmpty(errors) };
};

export default validateInput;

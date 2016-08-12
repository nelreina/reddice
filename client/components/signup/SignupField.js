import React from 'react';
import FieldError from './SignupFieldError';

export default ({ name, label, value, onChange, type, error }) => (
	<div className={error ? "has-error" : "form-group"}>
		<label htmlFor="" className="control-label">{label}</label>
		<input
			value={value}
			onChange={onChange}
			type={type ? type : 'text'}
			name={name}
			className="form-control"
		/>
		<FieldError error={error} />
	</div>
);

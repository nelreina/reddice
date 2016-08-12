import React from 'react';
import timezones from '../../data/timezones';
import FieldError from './SignupFieldError';

export default ({ value, onChange, error }) => {
	const options = () => {
		return timezones.map((tz, idx)=> (
			<option key={idx} value={tz.value}>{tz.text}</option>)
		);
	};
	return (
		<div className={error ? "has-error" : "form-group"}>
			<label htmlFor="" className="control-label">Timezone</label>
			<select
				value={value}
				onChange={onChange}
				name="timezone"
				className="form-control"
			>
				<option value="" disabled>Choose your timezone</option>
				{options()}
			</select>
			<FieldError error={error} />
		</div>
	);
};

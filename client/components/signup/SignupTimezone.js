import React from 'react';
import timezones from '../../data/timezones';

export default ({ value, onChange }) => {
	const options = () => {
		return timezones.map((tz, idx)=> (
			<option key={idx} value={tz.value}>{tz.text}</option>)
		);
	};
	return (
		<div className="form-group">
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
		</div>
	);
};

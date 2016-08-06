import React from 'react';

export default ({ name, label, value, onChange, type }) => (
	<div className="form-group">
		<label htmlFor="" className="control-label">{label}</label>
		<input
			value={value}
			onChange={onChange}
			type={type ? type : 'text'}
			name={name}
			className="form-control"
		/>
	</div>
);

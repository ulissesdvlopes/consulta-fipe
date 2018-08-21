import React from 'react';

function CustomSelect(props) {

	return (
		<div className="form-element">
			<span className="select-label">{props.label}:</span> 
			<select 
				value={props.value}
				onChange={props.handler} 
				className="selects" 
			>
				<option disabled value="-1">Selecione um {props.label}</option>
				{props.lista.map((elemento)=> {
					return <option value={elemento.id} key={elemento.key}>{elemento.name}</option>
				})
				}
			</select>
		</div>
	);
}

export default CustomSelect;

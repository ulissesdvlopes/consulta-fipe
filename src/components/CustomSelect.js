import React from 'react';

function CustomSelect(props) {

	return (
		<div className="form-element">
			<span className="select-label">Marca:</span> 
			<select 
				value={props.value}
				onChange={props.handler} 
				className="selects" 
			>
				<option disabled value="-1">Selecione uma Marca</option>
				{props.lista.map((elemento)=> {
					return <option value={elemento.id} key={elemento.key}>{elemento.name}</option>
				})
				}
			</select>
		</div>
	);
}

export default CustomSelect;

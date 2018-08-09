import React from 'react';

function SelectMarcas(props) {

	return (
		<div className="form-element">
			<span className="select-label">Marca:</span> 
			<select 
				value={props.value}
				onChange={props.handler} 
				className="selects" 
			>
				<option disabled value="-1">Selecione uma Marca</option>
				{props.marcas.map((marca)=> {
					return <option value={marca.id} key={marca.key}>{marca.name}</option>
				})
				}
			</select>
		</div>
	);
}

export default SelectMarcas;

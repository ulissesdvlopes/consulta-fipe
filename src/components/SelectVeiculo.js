import React from 'react';

function SelectVeiculo(props) {

	return (
		<div className="form-element">
			<span className="select-label">Modelo:</span> 
			<select 
				value={props.value}  
				onChange={props.handler} 
				className="selects" 
			>
			  <option disabled value="-1">Selecione um veículo</option>
				{props.veiculos.map((veiculo)=> {
					return <option value={veiculo.id} key={veiculo.key}>{veiculo.name}</option>
				})
				}
			</select>
				
		</div>
	);

}

export default SelectVeiculo;

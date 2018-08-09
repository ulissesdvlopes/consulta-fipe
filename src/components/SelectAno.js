import React from 'react';


function SelectAno(props) {

	return (
		<div className="form-element">
			<span className="select-label">Ano:</span>
			<select value={props.value} onChange={props.handler} className="selects" >
				<option disabled value="-1">Selecione um ano</option>
				{props.anos.map((ano)=> {
					return <option value={ano} key={ano}>{ano.slice(0,4)}</option>
				})
				}
			</select>
		</div>
	);

}

export default SelectAno;

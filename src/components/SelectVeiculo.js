import React, { Component } from 'react';


class SelectVeiculo extends Component {

	constructor(props) {
		super(props);
		this.state = {veiculos: []};
	}

    
	componentDidUpdate(prevProps) {

		if(this.props.marca !== prevProps.marca && !this.state.msg) {
			let msg = '';
			fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${this.props.marca}.json`)
				.then((res)=> {
					if(res.ok) {
						res.json().then((data) => {
							this.setState({veiculos: data});
									 
						});
					} else {
						msg="Não foi possível estabelecer a conexão, tente novamente";
					}
					this.props.resetLoading(msg);
				});
		}

    }
    
    handler = (event) => {
		this.props.handler(event);
    }

  render() {

    return (
			<div className="form-element">
				<span className="select-label">Modelo:</span> 
				<select value={this.props.value}  onChange={this.handler} className="selects" >
				<option disabled value="-1">Selecione um veículo</option>
					{this.state.veiculos.map((veiculo)=> {
						return <option value={veiculo.id} key={veiculo.key}>{veiculo.name}</option>
					})
					}
				</select>
					
			</div>
    );
  }
}

export default SelectVeiculo;

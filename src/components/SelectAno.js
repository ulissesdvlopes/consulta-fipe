import React, { Component } from 'react';


class SelectAno extends Component {

	constructor(props) {
		super(props);
		this.state = {anos: []};
	}

    
	componentDidUpdate(prevProps) {

		if(this.props.veiculo !== prevProps.veiculo && this.props.veiculo !== -1) {

			let dados = [];
			let msg = '';
			fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.props.marca}/${this.props.veiculo}.json`)
				.then((res)=> {
					if(res.ok) {
						res.json().then((data) => {
							dados = data.map((modelo) => {
								return modelo.id;
							});
							this.setState({anos: dados});						 
						});
					} else {
						msg = "Não foi possível estabelecer a conexão, tente novamente";
					}
					this.props.resetLoading(msg);
				})
		}
            
	}
	
	handler = (event) => {
        this.props.handler(event);
    }
    

  render() {
    return (
			<div className="form-element">
				<span className="select-label">Ano:</span>
				<select value={this.props.value} onChange={this.handler} className="selects" >
                    <option disabled value="-1">Selecione um ano</option>
					{this.state.anos.map((ano)=> {
						return <option value={ano} key={ano}>{ano.slice(0,4)}</option>
					})
					}
				</select>
			</div>
    );
  }
}

export default SelectAno;

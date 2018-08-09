import React, { Component } from 'react';


class ModeloInfo extends Component {

	constructor(props) {
		super(props);
		this.state = {dados: {}};
	}

    
	componentDidUpdate(prevProps) {

    if(this.props.ano !== prevProps.ano && this.props.ano !== -1) {
			let msg = "";
			fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.props.marca}/${this.props.veiculo}/${this.props.ano}.json`)
				.then((res)=> {
					if(res.ok) {
						res.json().then((data) => {
							this.setState({dados: data});
						});
					} else {
						msg = "Não foi possível estabelecer a conexão, tente novamente";
					}
					this.props.resetLoading(msg);
				});
				
    }
        
        if(this.props.veiculo !== prevProps.veiculo || this.props.marca !== prevProps.marca) {
            this.setState({dados: {}});
        }
            
	}    

  render() {
    return (
			<div className="info">
				Preço: {this.state.dados.preco}
			</div>
    );
  }
}

export default ModeloInfo;

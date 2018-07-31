import React, { Component } from 'react';


class SelectMarcas extends Component {

	constructor(props) {
		super(props);
		this.state = {marcas: []};
	}

	componentDidMount() {
		fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json')
			.then((res)=> {
				if(res.ok) {
					 res.json().then((data) => {
						this.setState({marcas: data});
					 });
				}
			});

	}

	handler = (event) => {
		this.props.handler(event);
    }

  render() {
    return (
			<div className="form-element">
				<span className="select-label">Marca:</span> 
				<select value={this.props.value} onChange={this.handler} className="selects" >
					<option disabled value="-1">Selecione uma Marca</option>
					{this.state.marcas.map((marca)=> {
						return <option value={marca.id} key={marca.key}>{marca.name}</option>
					})
					}
				</select>
			</div>
    );
  }
}

export default SelectMarcas;

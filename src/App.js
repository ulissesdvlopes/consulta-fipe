import React, { Component } from 'react';
import './App.css';
import loadingIcon from './spinner.svg';
import SelectAno from './components/SelectAno';
import ModeloInfo from './components/ModeloInfo';
import FipeApi from './FipeApi';
import CustomSelect from './components/CustomSelect';


class App extends Component {

  constructor() {
    super();
    this.state = {
      marcaAtual: -1, 
      veiculoAtual: -1, 
      anoAtual: -1, 
      loading: false,
      msg: '',
      marcas: [],
      modelos: [],
      anos: [],
      modeloFinal: {}
    };
  }

  componentDidMount() {
		
		FipeApi.getMarcas((data, err)=> {
      let msg = '';
      if(err)
        msg = "Falha na conexão";
			this.setState({marcas: data, msg: msg});
		});

	}

  handleMarcaChange = (event) => {
    this.setState({marcaAtual: event.target.value, veiculoAtual: -1, anoAtual: -1, modeloFinal: {}, loading: true});

    FipeApi.getVeiculos((data, msg)=> {
      this.setState({modelos: data, loading: false, msg: msg});
    }, event.target.value);
  }

  handleVeiculoChange = (event) => {
    this.setState({veiculoAtual: event.target.value, anoAtual: -1, modeloFinal: {}, loading: true});

    FipeApi.getAnos(data => {
      this.setState({anos: data, loading: false});
    }, this.state.marcaAtual, event.target.value);
  }

  handleAnoChange = (event) => {
    this.setState({anoAtual: event.target.value, modeloFinal: {}, loading: true});

    FipeApi.getModelo(data => {
      this.setState({modeloFinal: data, loading: false});
    }, this.state.marcaAtual, this.state.veiculoAtual, event.target.value);
  }

  render() {

    let loading = null;
    if(this.state.loading) {
      loading = (<div className="loading" ><img id="loading-icon" alt="Loading..." src={loadingIcon}></img></div>)
    }

    return (
        <form className="forms" onChange={this.handleChange}>
          {this.state.msg}
          {loading}
          <CustomSelect  
            handler={this.handleMarcaChange} 
            value={this.state.marcaAtual}
            lista={this.state.marcas}
          />
          <CustomSelect 
            handler={this.handleVeiculoChange} 
            lista={this.state.modelos} 
            value={this.state.veiculoAtual} 
          />
          <SelectAno 
            handler={this.handleAnoChange}
            anos={this.state.anos} 
            value={this.state.anoAtual} 
          />
          <ModeloInfo 
            modelo={this.state.modeloFinal}
          />
        </form>
    );
  }
}

export default App;

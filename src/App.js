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
      anos: []
    };
  }

  componentDidMount() {
		
		FipeApi.getMarcas(data => {
			this.setState({marcas: data});
		});

	}

  resetLoading = (msg) => {
    this.setState({loading: false, msg: msg});
  }

  handleMarcaChange = (event) => {
    this.setState({marcaAtual: event.target.value, veiculoAtual: -1, anoAtual: -1, loading: true});

    FipeApi.getModelos((data, msg)=> {
      this.setState({modelos: data, loading: false, msg: msg});
    }, event.target.value);
    console.log("marca: " + event.target.value);
    
  }

  handleVeiculoChange = (event) => {
    this.setState({veiculoAtual: event.target.value, anoAtual: -1, loading: true});

    FipeApi.getAnos(data => {
      this.setState({anos: data, loading: false});
    }, this.state.marcaAtual, event.target.value);

    console.log("veiculo: " + event.target.value);
  }

  handleAnoChange = (event) => {
    console.log("modelo: " + event.target.value);
    this.setState({anoAtual: event.target.value, loading: true});
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
            resetLoading={this.resetLoading}  
            marca={this.state.marcaAtual} 
            veiculo={this.state.veiculoAtual} 
            ano={this.state.anoAtual}
          />
        </form>
    );
  }
}

export default App;

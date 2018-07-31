import React, { Component } from 'react';
import './App.css';
import loadingIcon from './spinner.svg';
import SelectMarcas from './components/SelectMarcas';
import SelectVeiculo from './components/SelectVeiculo';
import SelectAno from './components/SelectAno';
import ModeloInfo from './components/ModeloInfo';

class App extends Component {

  constructor() {
    super();
    this.state = {marcaAtual: -1, veiculoAtual: -1, anoAtual: -1, loading: false, msg: ''};
  }

  resetLoading = (msg) => {
    this.setState({loading: false, msg: msg});
  }

  handleMarcaChange = (event) => {
    console.log("marca: " + event.target.value);
    this.setState({marcaAtual: event.target.value, veiculoAtual: -1, anoAtual: -1,loading: true});
  }

  handleVeiculoChange = (event) => {
    console.log("veiculo: " + event.target.value);
    this.setState({veiculoAtual: event.target.value, anoAtual: -1, loading: true});
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
          <SelectMarcas  handler={this.handleMarcaChange} value={this.state.marcaAtual} />
          <SelectVeiculo resetLoading={this.resetLoading} handler={this.handleVeiculoChange} marca={this.state.marcaAtual} value={this.state.veiculoAtual} />
          <SelectAno resetLoading={this.resetLoading} handler={this.handleAnoChange} marca={this.state.marcaAtual} veiculo={this.state.veiculoAtual} value={this.state.anoAtual} />
          <ModeloInfo resetLoading={this.resetLoading}  marca={this.state.marcaAtual} veiculo={this.state.veiculoAtual} ano={this.state.anoAtual}/>
        </form>
    );
  }
}

export default App;

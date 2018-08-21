import React, { Component } from 'react';
import './App.css';
import loadingIcon from './spinner.svg';
import SelectAno from './components/SelectAno';
import ModeloInfo from './components/ModeloInfo';
import FipeApi from './FipeApi';
import CustomSelect from './components/CustomSelect';
import { getMarcas, failAction } from './actions/actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
		
		FipeApi.getMarcas((data, err)=> {
      if(err)
        this.props.fail();

      this.props.listaMarcas(data);
		});

	}

  handleMarcaChange = event => {
    this.props.selectMarca(event);

    FipeApi.getVeiculos((data, err)=> {
      if(err)
        this.props.fail();

      this.props.listaVeiculos(data)
    }, event.target.value);
  }

  handleVeiculoChange = event => {
    this.props.selectVeiculo(event);

    FipeApi.getAnos(data => {
      this.props.listaAnos(data);
    }, this.props.marcaAtual, event.target.value);
  }

  handleAnoChange = event => {
    this.props.selectAno(event);

    FipeApi.getModelo(data => {
      this.props.getModelo(data);
    }, this.props.marcaAtual, this.props.veiculoAtual, event.target.value);
  }

  render() {

    let loading = null;
    if(this.props.loading) {
      loading = (<div className="loading" ><img id="loading-icon" alt="Loading..." src={loadingIcon}></img></div>)
    }

    return (
        <form className="forms" onChange={this.handleChange}>
          {this.props.msg}
          {loading}
          <CustomSelect
            label = "Marca"
            handler={this.handleMarcaChange} 
            value={this.props.marcaAtual}
            lista={this.props.marcas}
          />
          <CustomSelect 
            label = "Veículo"
            handler={this.handleVeiculoChange} 
            lista={this.props.modelos} 
            value={this.props.veiculoAtual} 
          />
          <SelectAno 
            handler={this.handleAnoChange}
            anos={this.props.anos} 
            value={this.props.anoAtual} 
          />
          <ModeloInfo 
            modelo={this.props.modeloFinal}
          />
        </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    marcaAtual: state.marcaAtual, 
    veiculoAtual: state.veiculoAtual, 
    anoAtual: state.anoAtual, 
    loading: state.loading,
    msg: state.msg,
    marcas: state.marcas,
    modelos: state.modelos,
    anos: state.anos,
    modeloFinal: state.modeloFinal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fail: () => 
      dispatch(failAction('Não foi possível acessar o servidor')),

    listaMarcas: data =>
      dispatch(getMarcas(data)),

    selectMarca: event =>
      dispatch({
        type: 'SELECT_MARCA',
        marcaAtual: event.target.value
      }),

    listaVeiculos: data =>
      dispatch({
        type: 'GET_VEICULOS',
        modelos: data
      }),

    selectVeiculo: event =>
      dispatch({
        type: 'SELECT_VEICULO',
        veiculo: event.target.value
      }),

    listaAnos: data =>
      dispatch({
        type: 'GET_ANOS',
        anos: data
      }),

    selectAno: event =>
      dispatch({
        type: 'SELECT_ANO',
        ano: event.target.value
      }),

    getModelo: data =>
      dispatch({
        type: 'GET_MODELO',
        modelo: data
      })
  }
}


const containerApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default containerApp;

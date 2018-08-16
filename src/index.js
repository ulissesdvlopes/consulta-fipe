import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './reducers/reducers';
import { createStore } from 'redux';

const state = {
    marcaAtual: -1, 
    veiculoAtual: -1, 
    anoAtual: -1, 
    loading: false,
    msg: '',
    marcas: [],
    modelos: [],
    anos: [],
    modeloFinal: {}
  }

const store = createStore(reducer, state);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();

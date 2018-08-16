import { GET_MARCAS } from '../actions/actions'

export function reducer(state, action) {

    if(action.type === 'FALHA') {

        return Object.assign({}, state, action.payload);

    }

    if(action.type === GET_MARCAS) {

        return Object.assign({}, state, {marcas: action.marcas});

    }

    if(action.type === 'SELECT_MARCA') {

        return Object.assign({}, state, action.payload);

    }

    if(action.type === 'GET_VEICULOS') {

        return Object.assign({}, state, action.payload);

    }

    if(action.type === 'SELECT_VEICULO') {

        return Object.assign({}, state, action.payload);

    }

    if(action.type === 'GET_ANOS') {

        return Object.assign({}, state, action.payload);

    }

    if(action.type === 'SELECT_ANO') {

        return Object.assign({}, state, action.payload);

    }

    if(action.type === 'GET_MODELO') {

        return Object.assign({}, state, action.payload);

    }

    return state;
}
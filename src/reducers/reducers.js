import { GET_MARCAS, FAIL } from '../actions/actions'

export function reducer(state, action) {

    switch(action.type) {

        case FAIL: 
            return Object.assign({}, state, action.msg);

        case GET_MARCAS:
            return Object.assign({}, state, {marcas: action.marcas});

        case 'SELECT_MARCA':

            return Object.assign({}, state, 
                {
                    veiculoAtual: -1, 
                    anoAtual: -1, 
                    modeloFinal: {}, 
                    loading: true,
                    marcaAtual: action.marcaAtual
                });

        case 'GET_VEICULOS':
            return Object.assign({}, state, {
                loading: false,
                modelos: action.modelos
            });

        case 'SELECT_VEICULO':
            return Object.assign({}, state, {
                veiculoAtual: action.veiculo, 
                anoAtual: -1, 
                modeloFinal: {}, 
                loading: true
            })

        case 'GET_ANOS':
            return Object.assign({}, state, {anos: action.anos, loading: false});

        case 'SELECT_ANO':
            return Object.assign({}, state, {
                anoAtual: action.ano,
                modeloFinal: {}, 
                loading: true
            });

        case 'GET_MODELO':
            return Object.assign({}, state, {
                modeloFinal: action.modelo,
                loading: false
            });

        default:
            return state;
    }
}
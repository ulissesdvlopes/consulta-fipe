import { GET_MARCAS } from '../actions/actions'

export function reducer(state, action) {

    if(action.type === GET_MARCAS) {

        return Object.assign({}, state, {marcas: action.marcas});

    }

    return state;
}
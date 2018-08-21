//Action types

export const GET_MARCAS = 'GET_MARCAS';
export const FAIL = 'FAIL';

//Action creators

export function getMarcas(marcas) {
    return {type: GET_MARCAS, marcas};
}

export function failAction(msg) {
    return {type: FAIL, msg};
}
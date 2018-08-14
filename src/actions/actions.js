//Action types

export const GET_MARCAS = 'GET_MARCAS';

//Action creators

export function listaMarcas(marcas) {
    return {type: GET_MARCAS, marcas};
}
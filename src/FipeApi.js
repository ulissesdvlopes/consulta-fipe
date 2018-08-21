const baseUrl = 'http://fipeapi.appspot.com/api/1/carros';

export default class FipeApi {

	static getMarcas(callback) {
		fetch(`${baseUrl}/marcas.json`)
			.then(res => {
				if(!res.ok) 
					throw Error(res.statusText);
				return res;
			})
			.then(res => res.json())
			.then(data => callback(data, false))
			.catch(error => callback([], true));
}

	static getVeiculos(callback, marca) {
		fetch(`${baseUrl}/veiculos/${marca}.json`)
			.then(res => {
				if(!res.ok) 
					throw Error(res.statusText);
				return res;
			})
			.then(res => res.json())
			.then(data => callback(data, false))
			.catch(error => callback([], true))
	}

	static getAnos(callback, marca, veiculo) {
		let dados = [];
		fetch(`${baseUrl}/veiculo/${marca}/${veiculo}.json`)
			.then((res)=> {
				if(res.ok) {
					res.json().then((data) => {
						dados = data.map((modelo) => {
							return modelo.id;
						});
						callback(dados);						 
					});
				}
			});
	}

	static getModelo(callback, marca, veiculo, ano) {
		fetch(`${baseUrl}/veiculo/${marca}/${veiculo}/${ano}.json`)
				.then((res)=> {
					if(res.ok) {
						res.json().then((data) => {
							callback(data);
						});
					}
				});
	}
}
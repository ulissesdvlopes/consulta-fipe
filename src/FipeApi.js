
export function getMarcas(callback) {
	fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json')
			.then((res)=> {
				if(res.ok) {
					 res.json().then((data) => {
						 callback(data);
					 });
				}
			});
}

export function getModelos(callback, marca) {
	let msg = '';
	fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${marca}.json`)
		.then((res)=> {
			if(!res.ok) 
				msg="Não foi possível estabelecer a conexão, tente novamente";
			
			res.json().then(data => {
				callback(data, msg)
			});
		});
}

export function getAnos(callback, marca, veiculo) {
    let dados = [];
    fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${marca}/${veiculo}.json`)
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
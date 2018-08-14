import React from 'react';


function ModeloInfo(props) {

    return (
		<div className="info">
			Preço: {props.modelo.preco}
		</div>
    );

}

export default ModeloInfo;

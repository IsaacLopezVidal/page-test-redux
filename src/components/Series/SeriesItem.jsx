import React from "react";
const Serie = props => (
<div  className="card" >
<div className="card-body">
        <h5 className="card-title">{props.data.titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Serie: {props.data.idSerie}</h6>
        <p className="card-text">Fecha:{props.data.datos[0].fecha} con tasa: {props.data.datos[0].dato} % </p>
      </div>
</div>
);
export default Serie;

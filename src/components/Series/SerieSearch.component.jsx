import React from "react";
const SerieSearch=props=>(
    
        <div className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label for="inputSerie2" >Serie</label>
                <input type="text"
                    onChange={(e)=>props.loadSerie(e.target.value)}
                 className="form-control" id="inputSerie2" placeholder="SP74665,SF61745,SF60634,SF43773"/>
            </div>
            <button  className="btn btn-primary mb-2">Buscar</button>
        </div>
)
export default SerieSearch
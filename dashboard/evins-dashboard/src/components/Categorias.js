import React from "react";
import { useEffect, useState } from "react";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [cantidad, setCantidad] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/product/api`)
        .then(response => response.json())
        .then(data => {
            setCategorias(Object.keys(data.countByCategory));
            setCantidad(Object.keys(data.countByCategory).map(key => data.countByCategory[key]));
            })

        .catch(error => console.error(error))
}, [])

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800" width="100%">
            Categorias
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          {
							categorias.length > 0 && categorias.map((categorias, i) => {
							
              	return (
                  <div className="col-lg-6 mb-4" key={i}>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{categorias} : {cantidad[i]} productos</div>
              </div>
            </div>

								)
							})
						}          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;

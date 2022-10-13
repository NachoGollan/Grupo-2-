import React from 'react';
import { useEffect, useState } from "react";
import ChartRow from './ChartRow';

function ListadoProductos (){
    const [productos, setProductos] = useState([]) ;

	useEffect(() => {
		fetch(`http://localhost:3001/product/api`)
		.then(response => response.json())
		.then(data => {	
			setProductos(data.products)})
		.catch(error => console.error(error))
	}, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800" width="100%">
            Tabla de productos
          </h5>
          </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Descuento</th>
                                <th>Enlace</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Descuento</th>
                                <th>Enlace</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            productos.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            
                            })
                            
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ListadoProductos;
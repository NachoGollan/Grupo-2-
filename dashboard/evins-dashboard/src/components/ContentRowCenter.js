import React from 'react';
import UltimoProducto from './UltimoProducto';
import Categorias from './Categorias';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Ultimo Producto in DB -->*/}
            <UltimoProducto />
            {/*<!-- Fin panel Ultimo Producto en base de datos -->*/}

            {/*<!-- Categorias en base de datos -->*/}
            <Categorias />

        </div>
    )
}

export default ContentRowCenter;
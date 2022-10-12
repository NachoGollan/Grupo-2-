import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- productos en base de datos --> */

let totalProductos = {
    title: 'Total productos',
    color: 'primary', 
    cuantity: 19,
    icon: 'fa-regular fa-wine-bottle'
}

/* <!-- Total categorias --> */

let totalCategorias = {
    title:' Total categorias', 
    color:'success', 
    cuantity: '79',
    icon:'fa-solid fa-list-ul'
}

/* <!-- total usuarios--> */

let totalUsuarios = {
    title:'Total usuarios' ,
    color:'warning',
    cuantity:'20',
    icon:'fa-user-check'
}

let cartProps = [totalProductos, totalCategorias, totalUsuarios];

function ContentRowEvins(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowEvins;
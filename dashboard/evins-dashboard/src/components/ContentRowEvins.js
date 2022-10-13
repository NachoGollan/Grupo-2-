import React , {Component, useState, useEffect} from 'react';
import SmallCard from './SmallCard';



function ContentRowEvins(){
       
 /* <!-- productos en base de datos --> */
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3001/product/api`)
            .then(response => response.json())
            .then(data => {
                setProductos(data)
                setCategorias(Object.keys(data.countByCategory).length)
            })

            .catch(error => console.error(error))
    }, [])

/* <!-- Users in DB --> */
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/users/api`)
            .then(response => response.json())
            .then(data => {
                setUsuarios(data.count)
            })
            .catch(error => console.error(error))
    }, [])
    
    let totalProductos = {
        title: 'Total productos',
        color: 'primary', 
        cuantity: productos.count,
        icon: 'fa-regular fa-wine-bottle'
    }
    
    /* <!-- Total categorias --> */
    
    let totalCategorias = {
        title:' Total categorias', 
        color:'success', 
        cuantity: categorias,
        icon:'fa-solid fa-list-ul'
    }
    
    /* <!-- total usuarios--> */
    
    let totalUsuarios = {
        title:'Total usuarios' ,
        color:'warning',
        cuantity: usuarios,
        icon:'fa-user-check'
    }
    
     

    let cartProps = [totalProductos, totalCategorias, totalUsuarios];
    return (
        
        <div className="row">
            
            {cartProps.map( (dataApi, i) => {

                return <SmallCard {...dataApi} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowEvins;
import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState, /*useRef*/ } from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Pizzas and Categories in DB --> */

function ContentRowApp() {

    const [pizzas, setPizzas] = useState([]);
    const [doughs, setDoughs] = useState([]);
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/product/api`)
            .then(response => response.json())
            .then(data => {
                setPizzas(data)
                setDoughs(Object.keys(data.countByCategory.doughs).length)
                setSizes(Object.keys(data.countByCategory.sizes).length)
            })

            .catch(error => console.error(error))
    }, [])

/* <!-- Users in DB --> */

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/users/api`)
            .then(response => response.json())
            .then(data => {
                setUsers(data.count)
            })
            .catch(error => console.error(error))
    }, [])


    let pizzasInDB = {
        title: 'Cantidad de Pizzas',
        color: 'primary',
        cuantity: pizzas.count ?? 'no llega',
        icon: 'fa-clipboard-list'
    }

    let doughsInDB = {
        title: 'Cantidad Categoría Masa',
        color: 'info',
        cuantity: doughs ?? 'no llega',
        icon: 'fa-clipboard-list'
    }

    let sizesInDB = {
        title: 'Cantidad Categoría Tamaño ',
        color: 'warning',
        cuantity: sizes ?? 'no llega',
        icon: 'fa-clipboard-list'
    }


    /* <!-- Users quantity --> */

    let usersInDb = {
        title: 'Cantidad de usuarios',
        color: 'success',
        cuantity: users,
        icon: 'fa-user-check'
    }

    let cartProps = [pizzasInDB, usersInDb, doughsInDB, sizesInDB];


    return (

        <div className="row">

            {cartProps.map((element, i) => {

                return <SmallCard {...element} key={i} />

            })}

        </div>
    )
}

export default ContentRowApp;
import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.product_name}</td>
                    <td>{props.price}</td>
                    <td>{props.category_id}</td>
                    <td>{props.discount}%</td>
                    <td> <a href = {`http://localhost:3001/product/${props.product_id}`}>{props.product_id}</a> </td>
                </tr>
    )
}
    
        

export default ChartRow;
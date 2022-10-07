import React, {Component} from "react";

function Panel (props){
    return (
        <div>
            <ul>
                {props.totales.map(total => <li>{total}</li>)}
            </ul>
        </div>
    ) 
}

export default Panel
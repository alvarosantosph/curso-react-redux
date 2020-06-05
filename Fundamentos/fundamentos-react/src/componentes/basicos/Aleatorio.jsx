import React from 'react'

export default function Aleatorio(props) {

    //const max = props.max
    //const min = props.min
    
    const {min, max} = props

    const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    return (
        <div>
            <h1>Valor Aleatório</h1>
            <p><strong>Valor Mínimo:</strong> { min }</p>
            <p><strong>Valor Máximo:</strong> { max }</p>
            <p><strong>Valor Escolhido:</strong> { aleatorio }</p>
        </div>
    )
}

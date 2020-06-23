import React from  'react'
import Card from './Card'

export default props => {

    //const min = props.min
    //const max = props.max

    const {min, max} = props

    return (
        <Card title="Média dos Números" green>
            <div>
                <span>Resultado: </span>
                <strong>{(max + min) / 2}</strong>
            </div>
        </Card>
    )
}
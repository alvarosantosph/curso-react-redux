import React from  'react'
import Card from './Card'

export default props => {

    //const min = props.min
    //const max = props.max

    const {min, max} = props

    return (
        <Card title="Soma dos Números"blue>
            <div>
                <span>Resultado: </span>
                <strong>{max + min}</strong>
            </div>
        </Card>
    )
}
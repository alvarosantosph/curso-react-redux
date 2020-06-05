import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return  (
        <div>
            <DiretaFilho texto="Filho 1" numero={20} bol={true} />
            <DiretaFilho texto="Filho 2" numero={17} bol={false} />
        </div>
    )
}
import React from 'react'

export default props => {
    const cb = props.quandoClicar;
    const min = 20
    const max = 50
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
    const gerarNerd = () => Math.random() > 0.5 
    return  (
        <div>
            {/*<button onClick={_ => cb('João', 30, true)}></button> */}

            <button onClick={
                function(e) {
                    props.quandoClicar('João', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Informações</button>
        </div>
    )
}
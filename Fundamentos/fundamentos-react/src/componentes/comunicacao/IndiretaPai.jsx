import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return  (
        <div>
            <div><strong>{nome}</strong></div>
            <div><strong>{idade}</strong></div>
            <div><strong>{nerd ? 'Verdadeiro' : 'False'}</strong></div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}
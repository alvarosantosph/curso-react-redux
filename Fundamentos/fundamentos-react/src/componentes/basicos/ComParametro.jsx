import React from 'react'

export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'Aprovado!' : 'Reprovado!'

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <strong>{ props.aluno }</strong> tem nota <strong>{ props.nota }</strong> e está <strong>{status}</strong>
        </div>
    )
}
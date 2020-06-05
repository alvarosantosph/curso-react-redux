import React from 'react'

import alunos from '../../data/alunos'

export default props => {

    const alunosLi = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                <ul>
                    {aluno.id} - {aluno.nome} - {aluno.nota}
                </ul>
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: "none", textAlign: "left"}}>
                <strong>{ alunosLi }</strong>
            </ul>
        </div>
    )
}
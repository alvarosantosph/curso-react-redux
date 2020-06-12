import React from 'react'
import IconButton from '../tamplate/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' 
                        onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style='warning' icon='undo' 
                        onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style='danger' icon='trash-o' 
                        onClick={() => props.handleRemove(todo)} hide={!todo.done}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <th>Descrição</th>
                <th className='tableActions'>Ações</th>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
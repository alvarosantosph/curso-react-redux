import './Intervalo.css'
import React from  'react'
import { connect } from 'react-redux'
import Card from './Card'
import { alterarNumeroMinino } from '../store/actions/numeros'
import { alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo = props => {

    const {min, max} = props
    
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={e => props.alterarMinino(+e.target.value)} />

                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinino(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinino(novoNumero) 
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMaximo(novoNumero) 
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)
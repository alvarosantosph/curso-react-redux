import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero : this.props.numeroInicial || 0,
        passo : this.props.passoInicial || 5
    }


    //constructor(props) {
        //super(props)
        //this.state = {
        //    numero: props.numeroInicial
        //}
        // this.inc = this.inc.bind(this)
    //}

    /*
    inc() {
        this.setState({
            numero: this.state.numero + 1,
        });
    }
    */

   inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: +novoPasso.target.value,
        });
    }

    render() {
        return (
            <div className="Contador">
                <h3><strong>Contador</strong></h3>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}

export default Contador
import './App.css'
import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'
import Familia from './componentes/basicos/Familia'
import FamiliaMembro from './componentes/basicos/FamiliaMembro'
import ListaAlunos from './componentes/repeticao/ListaAlunos'
import ListaProdutos from './componentes/repeticao/ListaProdutos'
import ParOuImpar from './componentes/condicional/ParOuImpar'
import UsuarioInfo from './componentes/condicional/UsuarioInfo'
import DiretaPai from './componentes/comunicacao/DiretaPai'
import IndiretaPai from './componentes/comunicacao/IndiretaPai'
import Input from './componentes/formulario/Input'
import Contador from './componentes/contador/Contador'
import Mega from './componentes/mega/Mega'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos REACT</h1>
            <div className="Cards">
                <Card titulo="#13 - Mega Sena" color="#B9006E">
                    <Mega qtde={6} />
                </Card>

                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="#11 - Componente Controlado" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="#9 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="#8 - Par ou Impar" color="#982395">
                    <ParOuImpar numero={21} />
                    <UsuarioInfo usuario={{nome : 'Alvaro'}} />
                    <UsuarioInfo usuario={{nome : 'Pedro'}} />
                    <UsuarioInfo usuario={{nome : 'Jackeline'}} />
                </Card>

                <Card titulo="#7 - Lista de Produtos" color="#334D80">
                    <ListaProdutos />
                </Card>

                <Card titulo="#6 - Lista de Alunos" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="#5 - Componentes com Filhos" color="#00c8f8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="João" />
                        <FamiliaMembro nome="Maria" />
                    </Familia>
                </Card>

                <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#3 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
                    <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={6.3} />
                    <ComParametro titulo="Situação do Aluno" aluno="Maria" nota={9.1} />
                </Card>

                <Card titulo="#1 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}

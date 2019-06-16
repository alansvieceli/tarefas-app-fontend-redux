import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasLista from './tarefasLista'

export default class Tarefa extends Component {
    render(){        
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TarefasForm />
                <TarefasLista />
            </div>
        );
    }
}
import React, { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasLista from './tarefasLista'

const URL = "http://localhost:3003/api/tarefas";

export default class Tarefa extends Component {

    constructor(props){
        super(props);
        this.state = {descricao: '', lista: []};
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh();
    }

    refresh(descricao = ''){
        /*
            sort = filtro automatico da api
            __regex= automatio da api tbm

        */
       const search = descricao ? `&descricao__regex=/${descricao}/` : ''
        axios.get(`${URL}?sort=-criacao${search}` )
            .then((resp) => this.setState({...this.state, descricao, lista: resp.data}));
    }

    handleSearch(){
        this.refresh(this.state.descricao);
    }

    handleClear(){
        this.refresh();
    }

    render(){        
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TarefasForm 
                    handleClear={this.handleClear} />
                <TarefasLista                     
                    handleRemove={this.handleRemove} />
            </div>
        );
    }
}
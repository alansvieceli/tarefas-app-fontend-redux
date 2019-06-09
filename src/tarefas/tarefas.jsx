import React, { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasLista from './tarefasLista'
import { timingSafeEqual } from 'crypto';

const URL = "http://localhost:3003/api/tarefas";

export default class Tarefa extends Component {

    constructor(props){
        super(props);
        this.state = {descricao: '', lista: []};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh();
    }

    refresh(descricao = ''){
        /*
            sorte = filtro automatico da api
            __regex= automatio da api tbm

        */
       const search = descricao ? `&descricao__regex=/${descricao}/` : ''
        axios.get(`${URL}?sort=-criacao${search}` )
            .then((resp) => this.setState({...this.state, descricao, lista: resp.data}));
    }

    handleChange(e){
        this.setState({ ...this.state, descricao: e.target.value});        
    }

    handleAdd(){
        const descricao = this.state.descricao;
        axios.post(URL, { descricao })
            .then((resp) => this.refresh());
    }

    handleMarkAsDone(tarefa){        
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, finalizada: true})
            .then((resp) => this.refresh(this.state.descricao));
    }

    handleMarkAsPending(tarefa){
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, finalizada: false})
            .then((resp) => this.refresh(this.state.descricao));
    }

    handleRemove(tarefa){
        axios.delete(`${URL}/${tarefa._id}`)
            .then((resp) => this.refresh(this.state.descricao));
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
                    descricao={this.state.descricao}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear} />
                <TarefasLista 
                    lista={this.state.lista}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        );
    }
}
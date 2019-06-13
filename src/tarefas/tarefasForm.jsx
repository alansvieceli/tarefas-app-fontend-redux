import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescricao, search } from './tarefasActions'


class tarefasForm extends Component {
    constructor(props){
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }

    keyHandle(e) {
        if (e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else 
        if (e.key === 'Escape') {
            this.props.handleClear();
        }
    }

    componentWillMount(){
        this.props.search();
    }

    render(){
        return (
            <div role='form' className='todoForm'>
            <Grid cols="12 9 10">
                <input id="descricao" className="form-control" 
                    placeholder="Adicione uma tarefa"
                    onChange={this.props.changeDescricao}
                    onKeyUp={this.keyHandle}
                    value={this.props.descricao}/>                
            </Grid>
            <Grid cols="12 3 2">
            <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}/>
            <IconButton style='info' icon='search' onClick={this.props.handleSearch}/>
            <IconButton style='default' icon='close' onClick={this.props.handleClear}/>
            </Grid>
        </div>
        );
    }
}

const mapStateToProps = state => ({descricao: state.tarefa.descricao})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescricao, search} , dispatch)

//padrão de projeto, decorator
export default connect(mapStateToProps, mapDispatchToProps)(tarefasForm)
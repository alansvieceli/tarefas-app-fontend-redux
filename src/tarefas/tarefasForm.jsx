import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescricao, search, add, clear } from './tarefasActions'


class tarefasForm extends Component {
    constructor(props){
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }

    keyHandle(e) {
        const { add, search, descricao, clear} = this.props; //Extrai de props

        if (e.key === 'Enter'){            
            e.shiftKey ? search() : add(descricao)
        } else 
        if (e.key === 'Escape') {
            clear();
        }
    }

    componentWillMount(){
        this.props.search();
    }

    render(){
        const { add, search, descricao} = this.props; //Extrai de props

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
            <IconButton style='primary' icon='plus' onClick={() => add(descricao)}/>
            <IconButton style='info' icon='search' onClick={this.props.search}/>
            <IconButton style='default' icon='close' onClick={this.props.clear}/>
            </Grid>
        </div>
        );
    }
}

const mapStateToProps = state => ({descricao: state.tarefa.descricao})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescricao, search, add, clear} , dispatch)

//padrão de projeto, decorator
export default connect(mapStateToProps, mapDispatchToProps)(tarefasForm)
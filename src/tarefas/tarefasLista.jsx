import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPendiing } from './tarefasActions'


const tarefasLista = props => {

    const renderRows = () => {
        const lista = props.lista || []
        return lista.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={tarefa.finalizada ? 'markedAsDone' : ''}>{tarefa.descricao}</td>
                <td>
                    <IconButton style='success' icon='check' hide={tarefa.finalizada}
                        onClick={() => props.markAsDone(tarefa)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!tarefa.finalizada} 
                        onClick={() => props.markAsPendiing(tarefa)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!tarefa.finalizada} 
                        onClick={() => props.handleRemove(tarefa)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({lista: state.tarefa.lista})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPendiing} , dispatch)

//padrão de projeto, decorator
export default connect(mapStateToProps, mapDispatchToProps)(tarefasLista)
import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'


const tarefasLista = props => {

    const renderRows = () => {
        const lista = props.lista || []
        return lista.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={tarefa.finalizada ? 'markedAsDone' : ''}>{tarefa.descricao}</td>
                <td>
                    <IconButton style='success' icon='check' hide={tarefa.finalizada}
                        onClick={() => props.handleMarkAsDone(tarefa)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!tarefa.finalizada} 
                        onClick={() => props.handleMarkAsPending(tarefa)}></IconButton>
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

//padrão de projeto, decorator
export default connect(mapStateToProps)(tarefasLista)
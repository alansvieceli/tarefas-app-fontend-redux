import { combineReducers } from 'redux';
import tarefasReducer from '../tarefas/tarefasReducer'

const rootRedeucer = combineReducers ({
    tarefa: tarefasReducer
})

export default rootRedeucer;
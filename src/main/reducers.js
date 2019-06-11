import { combineReducers } from 'redux';

const rootRedeucer = combineReducers ({
    tarefa: () => ({
        descricao: "Teste",
        lista: [{
            _id: 1,
            descricao: "Tarefa 1",
            finalizada: true
        }, {
            _id: 2,
            descricao: "Tarefa 2",
            finalizada: false
        }, {
            _id: 3,
            descricao: "Tarefa 3",
            finalizada: false
        }]
    })
})

export default rootRedeucer;
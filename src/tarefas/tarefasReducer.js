const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ALTEROU_DESCRICAO':
            return {...state, descricao: action.payload}
        default:
            return state
    }
}

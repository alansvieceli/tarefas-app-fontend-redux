const INITIAL_STATE = {
    descricao: "",
    lista: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ALTEROU_DESCRICAO':
            return {...state, descricao: action.payload}
        case 'TAREFAS_PESQUISADA':
            return {...state, lista: action.payload.data}
        case 'TAREFAS_ADICIONADA':
            return {...state, descricao: ''}
        default:
            return state
    }
}

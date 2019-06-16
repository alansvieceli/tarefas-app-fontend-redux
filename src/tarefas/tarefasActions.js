import axios from 'axios';

const URL = "http://localhost:3003/api/tarefas";

export const changeDescricao = (e) => ({
    type: "ALTEROU_DESCRICAO",
    payload: e.target.value
})

export const search = () => {

    return (dispatch, getState) => {
        const descricao = getState().tarefa.descricao;
        const search = descricao ? `&descricao__regex=/${descricao}/` : ''
        const request = axios.get(`${URL}?sort=-criacao${search}` )
            .then(resp => dispatch({type: 'TAREFAS_PESQUISADA', payload: resp.data}))
    }

}

export const add = (descricao) => {

    return dispatch => {
        axios.post(URL, {descricao})  //ou axios.post(url, {descricao: descricao});
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (tarefa) => {
    return dispatch => {
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, finalizada: true})
            .then(resp => dispatch(search()))
    }
}


export const markAsPendiing = (tarefa) => {
    return dispatch => {
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, finalizada: false})
            .then(resp => dispatch(search()))
    }
}

export const remove = (tarefa) => {
    return dispatch => {
        axios.delete(`${URL}/${tarefa._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{type: 'TAREFAS_CLEAR'}, search()]
}
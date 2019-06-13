import axios from 'axios';

const URL = "http://localhost:3003/api/tarefas";

export const changeDescricao = (e) => ({
    type: "ALTEROU_DESCRICAO",
    payload: e.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-criacao` );

    return {
        type: 'TAREFAS_PESQUISADA',
        payload: request
    }
    
}

export const add = (descricao) => {

    return dispatch => {
        axios.post(URL, {descricao})  //ou axios.post(url, {descricao: descricao});
            .then(resp => dispatch({type: 'TAREFAS_ADICIONADA', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}
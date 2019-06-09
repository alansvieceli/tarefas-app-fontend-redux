import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Tarefas from '../tarefas/tarefas'
import Sobre from '../sobre/sobre'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Tarefas} />
        <Route path='/sobre' component={Sobre} />
        <Redirect from='*' to='/tarefas' />
    </Router>
)
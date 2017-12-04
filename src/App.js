import React, { Component } from 'react';
import MyForm from './components/MyForm'
import TodoList from './components/TodoList'
import ToggleButton from './components/ToggleButton'
import store from './store'
import {currentAction} from './actions/index'

const App = () => {
  const tasks = store.getState().tasks
  console.log(tasks)
  const current = store.getState().current
  return (
    <div>
      <MyForm />
      <TodoList tasks={tasks} current={current}/>
      <ToggleButton onClick={() => store.dispatch(currentAction('done'))}>done</ToggleButton>
      <ToggleButton onClick={() => store.dispatch(currentAction('not yet'))}>not yet</ToggleButton>
      <ToggleButton onClick={() => store.dispatch(currentAction('all'))}>all</ToggleButton>
    </div>
  );
}

export default App;

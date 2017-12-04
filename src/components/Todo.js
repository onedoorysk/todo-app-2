import React from 'react'
import {toggleAction} from '../actions/index'
import store from '../store'

export default ({key, attr: {id, description, completed}}) => (
  <li key={key}
      onClick={() => store.dispatch(toggleAction(id))}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {description}
  </li>
)
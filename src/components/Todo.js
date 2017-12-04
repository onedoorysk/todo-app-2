import React from 'react'
import {toggleAction} from '../actions/index'
import store from '../store'

const asyncProc = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id)
    }, 500)
  })
}
export default ({key, attr: {id, description, completed}}) => (
  <li key={key}
      onClick={() => 
        asyncProc(id)
          .then((asyncId) => {
            store.dispatch(toggleAction(id))
          })
      }
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {description}
  </li>
)
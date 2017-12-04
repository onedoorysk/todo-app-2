import React from 'react'
import Todo from './Todo'

export default ({tasks, current}) => (
  <ul>
    {tasks.filter(({completed}) => {
      switch(current) {
        case 'done' :
          return completed
        case 'not yet':
          return !completed
        default:
          return true
      }
    }).map(attr => (
        <Todo
          key={attr.id}
          attr={attr}
        />
      )
    )}
  </ul>
)
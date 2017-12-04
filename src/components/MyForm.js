import React from 'react'
import {addAction} from '../actions/index'
import store from '../store'

export default () => {
  let input = null
  return (
    <div>
      <input ref={node => input = node} type="text" />
      <button onClick={() => {
        store.dispatch(addAction(input.value))
        input.value = ''
      }}>ADD</button>
    </div>
  )
}
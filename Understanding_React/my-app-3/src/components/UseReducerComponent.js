import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'


const reducer = (state, action) =>{
    switch(action.type){
        case 'inc':
            return {...state, count: state.count+1}
        case 'dec':
            return {...state, count: state.count-1}
        default:
            return state
    }
}
export default function UseReducerComponent() {
    const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type: 'dec'})}>Dec</button>
      <button onClick={()=>dispatch({type: 'inc'})}>Inc</button>
    </div>
  )
}

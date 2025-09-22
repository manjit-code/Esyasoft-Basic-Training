import React, { useState} from 'react'

// State Uplifting
export default function ParentComponent() {
    const [count, setCount] = useState(0);

    const increament = () =>{
        setCount(prev=>prev+1);
    }

    const decreament = () =>{
        setCount(prev=>prev-1);
    }

  return (
    <div>
      <p>Welcome To the Parent Component.</p>
      <Sibling1 count={count}/>
      <Sibling2 increament={increament} decreament={decreament}/>
    </div>
  )
}


function Sibling1({count}){
    return(
        <div>{count}</div>
    )
}

function Sibling2({increament, decreament}){

    return(
        <div>
            <button onClick={decreament}>Decreament</button>
            <button onClick={increament}>Increment</button>
        </div>
    )
}
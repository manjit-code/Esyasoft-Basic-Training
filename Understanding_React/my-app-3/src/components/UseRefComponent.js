import React, {useRef} from 'react'

// useref: to hold reference of an object/component/element

export default function UseRefComponent() {
    const ref = useRef(null);

    const buttonHandler = () =>{
        ref.current.focus();
    }
  return (
    <div>
      <input ref={ref}></input>
      <button onClick={buttonHandler}>Focus</button>
    </div>
  )
}

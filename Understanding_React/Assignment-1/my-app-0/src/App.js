// function App(props) {
//   // new ECMA script approach  App({name})
//   return (
//     <div className="App">
//       Hello world <br></br>
//       My name is {props.name}
//     </div>
//   );
// }

import { useState } from "react";
import EventComponent from "./components/EventComponent";
import LoginComponent from "./components/LoginComponent";
import { LoginFormComponent } from "./components/LoginFormComponent";

function App(){

  //      constant, variable
  const [counter, setCounter] = useState(0);
  
  const incrementButtonHandler = () =>{
    console.log("Increment Button Clicked !!");
    setCounter(counter + 1);
  }

  function decrementButtonHandler(){
    console.log("Decreament Button Clicked !!");
    setCounter(counter - 1);
  }

  return(
    <div>
      {/* <div>{counter}</div>
      <button onClick={decrementButtonHandler}>Dec</button>
      <button onMouseEnter={incrementButtonHandler}>Inc</button> */}

        <EventComponent/>
        <LoginComponent/>
        <LoginFormComponent/>

    </div>
  );
}

export default App;

// JSX: 
// Earlier when HTML was written within JS File, there was conflict between multiple same keywords like 'class'
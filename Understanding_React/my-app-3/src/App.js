// function App(props) {
//   // new ECMA script approach  App({name})
//   return (
//     <div className="App">
//       Hello world <br></br>
//       My name is {props.name}
//     </div>
//   );
// }

import { useState, createContext } from "react";


// import EventComponent from "./components/EventComponent";
// import LoginComponent from "./components/LoginComponent";
// import { LoginFormComponent } from "./components/LoginFormComponent";
// import Loginform from "./components/Loginform";
// import UseEffectComponent from "./components/UseEffectComponent";
// import UseRefComponent from "./components/UseRefComponent";
// import ParentComponent from "./components/ParentComponent";
// import MouseTracker from "./components/MouseTracker";
// import BlockHighlights from "./components/BlockHighlights";
import UseContextComponnet from "./components/UseContextComponnet";
import UseReducerComponent from "./components/UseReducerComponent";
import CallAnAPIComponnet from "./components/CallAnAPIComponnet";

// Declaring Global Varible 
const Context = createContext(null)
function App(){

  const [theme, setTheme] = useState('#FFFFFF');
  const [count, setCount] = useState(0);

  return(
    <Context.Provider value={
      {
        theme: theme,
        setTheme: setTheme,

        count: count,
        setCount: setCount
      }
    }>
      <div style={{background: theme}}>
        {/* <p>Welcome to My App</p> */}
        {/* <UseContextComponnet/> */}
        {/* <UseReducerComponent/> */}
        <CallAnAPIComponnet/>
      </div>
    </Context.Provider>
  );
}
export {Context}
export default App;

// JSX: 
// Earlier when HTML was written within JS File, there was conflict between multiple same keywords like 'class'
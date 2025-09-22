import React,{useContext} from 'react';
import {Context} from '../App';

export default function UseContextComponnet() {
    const {theme, count, setTheme} = useContext(Context)

    const handleThemeChange = () =>{
        if(theme === '#FFFFFF'){
            setTheme('#3b3c36')
        }
        else{    
            setTheme('#FFFFFF')
        }
    }
  return (
    <div>
      <p>Used Context Component: <br/>
      Theme:  {theme}<br/>
      Count: {count}</p>

      <button onClick={handleThemeChange}>Change Theme</button>
    </div>
  )
}
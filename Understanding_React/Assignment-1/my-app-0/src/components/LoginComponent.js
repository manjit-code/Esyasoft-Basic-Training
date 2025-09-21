import React from "react";
import { useState } from "react";

function LoginComponent(){
    const onClickHandler = () =>{

        if(username !== "username"){
            alert("Invalid UserName !!")
        }
        else if(password !== "password"){
            alert("Invalid Password !!")
        }
        else alert("Login button clicked !!")
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div style={{background: '#2cd263ff', padding: '50px'}}>
        <input type='text' value={username} placeholder="Enter User Name" onChange={(e) =>{
            setUsername(e.target.value)
        }}/>

        <input type='password' value={password} placeholder="Enter Password" onChange={(e) =>{
            setPassword(e.target.value)
        }}/>

        <button onClick={onClickHandler}>Login</button>
        </div>
    )
}

export default LoginComponent;
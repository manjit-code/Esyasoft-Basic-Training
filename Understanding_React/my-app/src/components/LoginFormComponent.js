import React from "react";
import { useState } from "react";

export const LoginFormComponent = () =>{
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
            <form onSubmit={onClickHandler}>
                <div style={{background: '#e70f0fff', padding: '50px'}}>
                    <input type='text' value={username} placeholder="Enter User Name" onChange={(e) =>{
                        setUsername(e.target.value)
                    }}/>
            
                    <input type='password' value={password} placeholder="Enter Password" onChange={(e) =>{
                        setPassword(e.target.value)
                    }}/>
            
                    <button type='submit'>Login</button>
                </div>
            </form>
        )
}
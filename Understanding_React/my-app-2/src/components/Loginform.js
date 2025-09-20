import React, {useState} from 'react'

export default function Loginform() {
  const [loginData, setLoginData] = useState({
    username:"",
    password:""
  })

  const onUserNameChangeHandler = (e) =>{
    setLoginData({
      ...loginData, // destructure the keys
      username: e.target.value // overide the value of existing key named 'username'
    })
  }

  const onUserPasswordChangeHandler = (e) =>{
    setLoginData({
      ...loginData, // destructure the keys
      password: e.target.value
    })
  }

  const loginButtonHandler = (e)=>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      Welcome to home page
      <form onSubmit={loginButtonHandler}>
        <br/>
        <input type='text' value={loginData.name} onChange={onUserNameChangeHandler} />
        <br/>
        <input type='password' value={loginData.password} onChange={onUserPasswordChangeHandler} />
        <br/>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}
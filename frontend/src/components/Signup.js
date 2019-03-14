import React from 'react'
import AUTH_API from '../services/Auth'
import { Button } from 'antd'


const info = {}



function Signup(props) {
  function handleChange(e) {
    const key = e.target.name
    info[key] = e.target.value
  }

  function signUp() {
    AUTH_API.signup(info)
      .then(res => {
        props.history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    
    
    <div className="Form">
      <input
      className="username"
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
      className="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <Button className="buttonnn"  type="primary" style={{ backgroundColor:"purple",}}onClick={signUp}>Sign Up</Button>
     
   </div>
    

   
  )

}

 


export default Signup

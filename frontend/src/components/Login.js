import React from 'react'

import AUTH_API from '../services/Auth'
import { Button } from 'antd'
const user = {}

function Login(props) {
  function handleInputs(e) {
    const key = e.target.name
    user[key] = e.target.value
  }

  function logIn() {
    AUTH_API.login(user)
      .then(res => {
        window.localStorage.setItem('user', JSON.stringify(res))
        props.history.push('/profile')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="bnb">
      <input
      className="email2"
        type="email"
        name="email"
        placeholder="email"
        onChange={handleInputs}
      />
      <input
      className="password2"
        type="password"
        name="password"
        placeholder="password"
        onChange={handleInputs}
      />
      <Button onClick={logIn} className="buttonnn2"  type="primary" style={{ backgroundColor:"purple",}}>Login</Button>
      
    </div>
  )
  
}



export default Login

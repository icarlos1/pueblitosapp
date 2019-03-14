import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Pueblitos from './components/Pueblitos'
import Tepoztlan from './components/Tepoztlan'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/pueblitos" component={Pueblitos}/>
    <Route exact path="/tepoztlan" component={Tepoztlan}/>
  </Switch>
)

export default Routes

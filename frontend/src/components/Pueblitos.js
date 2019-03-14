import React from 'react'
import AUTH_API from '../services/Auth'
import {Link} from 'react-router-dom'

import {Button} from "antd"


class Pueblitos extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (!user) return this.props.history.push('/login')
    AUTH_API.profile()
      .then(res => {
        this.setState({ user: res })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { user } = this.state
    if (!user) return <p>Loading ...</p>
    return (
      <div>
      
        <Link to="/Tlayacapan"> <Button class="button1"  type="primary" style={{ backgroundColor:"purple",}}>Tlayacapan</Button></Link>
        <Link to="/Tequisquiapan"> <Button type="primary" style={{ backgroundColor:"purple",}}>Tequisquiapan</Button></Link>
        <Link to="/Tepoztlan"> <Button type="primary" style={{ backgroundColor:"purple",}}>Tepoztlan</Button></Link>
        <Link to="/Valle de bravo"> <Button type="primary" style={{ backgroundColor:"purple",}}>Valle de bravo</Button></Link>
        <Link to="/Huasca de Ocampo"><Button type="primary" style={{ backgroundColor:"purple",}}>Huasca de Ocampo</Button></Link>
        <Link to="/SanSebastian"> <Button type="primary" style={{ backgroundColor:"purple",}}>SanSebastian</Button></Link>
      </div>
    )
  }
}




export default Pueblitos


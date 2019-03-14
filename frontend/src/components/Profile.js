import React from 'react'
import AUTH_API from '../services/Auth'
import {Link} from 'react-router-dom'

import {Button} from "antd"


class Profile extends React.Component {
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
        
        <Link to="/pueblitos"><Button type="primary" style={{ backgroundColor:"purple",}}>pueblitos</Button></Link>
      </div>
    )
  }
}




export default Profile


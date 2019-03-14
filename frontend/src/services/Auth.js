import Axios from 'axios'

const url = 'https://deploy-advanced-cracklitos.herokuapp.com/'

const AUTH_API = {
  signup: body => {
    return Axios.post(`${url}signup`, body, {
      withCredentials: true
    })
      .then(res => res.data)
      .catch(err => err)
  },
  login: body => {
    return Axios.post(`${url}login`, body, {
      withCredentials: true
    })
      .then(res => res.data)
      .catch(err => err)
  },
  profile: () => {
    return Axios.get(`${url}profile`, {
      withCredentials: true
    })
      .then(res => res.data)
      .catch(err => err)
  },
  pueplitos: () => {
    return Axios.get(`${url}pueblitos`, {
      withCredentials: true
    })
      .then(res => res.data)
      .catch(err => err)
  }
}

export default AUTH_API

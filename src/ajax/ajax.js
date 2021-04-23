import axios from 'axios'

class Ajax {
  ajax() {
    return axios.create({
      baseURL: process.env.REACT_APP_REQUEST_URL,
    })
  }
}

export default Ajax

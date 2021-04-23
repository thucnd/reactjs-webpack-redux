import Ajax from './ajax'

class Auth extends Ajax {
  login(params) {
    return this.ajax().post('api/auth', params)
  }

  logout() {
    return this.ajax().delete('api/auth')
  }

  get() {
    return new Promise((resolve) => {
      resolve({
        name: 'A',
        email: 'test@email.com',
      })
    })
  }
}

const authAjax = new Auth()
export default authAjax

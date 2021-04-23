import userConstant from '../../constants/user'
import authAjax from '../../ajax/auth'

export function updateUserAuth(loggedUser) {
  return { type: userConstant.UPDATE_USER_AUTH, loggedUser }
}

export function getUserAuth() {
  return (dispatch) => {
    authAjax
      .get()
      .then((user) => {
        dispatch(updateUserAuth(user))
      })
      .catch(() => {
        // router.push('/login')
      })
  }
}

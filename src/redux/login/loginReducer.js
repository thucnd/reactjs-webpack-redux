import userConstant from '../../constants/user'
import initialState from '../initialState'

export default function loginReducer(state = initialState.loggedUser, action) {
  switch (action.type) {
    case userConstant.UPDATE_USER_AUTH:
      return action.loggedUser

    default:
      return state
  }
}

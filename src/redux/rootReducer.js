import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import loggedUser from './login/loginReducer'

const rootReducer = combineReducers({
  form: formReducer,
  loggedUser,
})

export default rootReducer

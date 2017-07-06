import { combineReducers } from 'redux'

import user from './app/user/UserReducer'
import social from './app/social/SocialReducer'

export default combineReducers({
  user,
  social
})
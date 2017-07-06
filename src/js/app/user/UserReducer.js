import {
  FETCH_USER,
  FETCH_USER_REJECTED,
  FETCH_USER_FULFILLED,

  SET_USER_NAME,
  SET_USER_CAREER
} from './UserActions'

const INIT_STATE = {
  user: {
    id: null,
    name: null,
    career: null
  },
  fetching: false,
  fetched: false,
  error: null
}

export default function reducer(state=INIT_STATE, action) {
  switch(action.type) {
  case FETCH_USER: {
    return {...state, fetching: true}
  }
  case FETCH_USER_REJECTED: {
    return {...state, fetching: false, error: action.payload}
  }
  case FETCH_USER_FULFILLED: {
    return {
      ...state, 
      fetching: false, 
      fetched: true,
      user: action.payload
    }
  }
  case SET_USER_NAME: {
    return {...state, user:{...state.user, name: action.payload}}
  }
  case SET_USER_CAREER: {
    return {...state, user:{...state.user, career: action.payload}}
  }
  }

  return state
}
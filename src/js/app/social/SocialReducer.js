import { 
  FETCH_SOCIAL,
  FETCH_SOCIAL_REJECTED,
  FETCH_SOCIAL_FULFILLED,
  SET_SOCIAL } from './SocialActions'

const INIT_STATE = {
  social: {
    twitter: '/signup',
    github: '/signup',
    linkedin: '/signup'
  },
  fetching: false,
  fetched: false,
  error: null
}

export default function reducer(state=INIT_STATE, action) {
  switch(action.type) {
  case FETCH_SOCIAL: {
    return {...state, fetching: true}
  }
  case FETCH_SOCIAL_REJECTED: {
    return {...state, fetching: false, error: action.payload}
  }
  case FETCH_SOCIAL_FULFILLED: {
    return {
      ...state, 
      fetching: false, 
      fetched: true,
      social: action.payload
    }
  }
  case SET_SOCIAL: {
    return {...state, social:{...state.social, social: action.payload}}
  }
  }

  return state
}
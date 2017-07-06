export const FETCH_SOCIAL = 'FETCH_SOCIAL'
export const FETCH_SOCIAL_REJECTED = 'FETCH_SOCIAL_REJECTED'
export const FETCH_SOCIAL_FULFILLED = 'FETCH_SOCIAL_FULFILLED'

export const SET_SOCIAL = 'SET_SOCIAL'

export function fetchSocial() {
  return {
    type: FETCH_SOCIAL
  }
}

export function setSocial(social) {
  return {
    type: SET_SOCIAL,
    payload: social
  }
}
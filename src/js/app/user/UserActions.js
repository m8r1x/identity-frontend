export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED'
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'

export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_CAREER = 'SET_USER_CARRER'

export function fetchUser() {
  return {
    type: FETCH_USER
  }
}

export function setUserName(name) {
  return {
    type: SET_USER_NAME,
    payload: name
  }
}

export function setUserCarrer(career) {
  return {
    type: SET_USER_CAREER,
    payload: career
  }
}

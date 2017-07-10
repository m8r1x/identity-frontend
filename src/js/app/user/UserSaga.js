import * as $ from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { 
  FETCH_USER,
  FETCH_USER_FULFILLED, 
  FETCH_USER_REJECTED 
} from './UserActions'

// $.defaults.baseURL = 'https://id3ntityapi.herokuapp.com/users'
$.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTk3MDgwMjR9.nRyldVw89WtcYU9zDUsMyINmmYDmUEZ2U6gPv4pmUks'

function* fetchUser() {
  try {
    const response = yield call($.get, 'https://id3ntityapi.herokuapp.com/users')
    const user = {
      name: response.data[0].name, 
      career: response.data[0].career
    }
    yield put({ type: FETCH_USER_FULFILLED, payload: user })

  } catch (e) {
    yield put({ type: FETCH_USER_REJECTED, payload: e.message })
  }
}

export default function* watchFetchUser() {
  yield takeEvery(FETCH_USER, fetchUser)
}
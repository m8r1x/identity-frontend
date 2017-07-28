import * as $ from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { 
  FETCH_USER,
  FETCH_USER_FULFILLED, 
  FETCH_USER_REJECTED 
} from './UserActions'

// $.defaults.baseURL = 'https://id3ntityapi.herokuapp.com/users'
// $.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTk3MDgwMjR9.nRyldVw89WtcYU9zDUsMyINmmYDmUEZ2U6gPv4pmUks'
url = 'http://identitygql.herokuapp.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjU5NzI0YzcwMWE3YjJlMDk4MDJkYjRkMyJ9LCJpYXQiOjE1MDA2NjI5NjgsImV4cCI6MTUzMjIyMDU2OH0.2kL5VctdRQSJoAyM3esX6K6kF3yBKPphbp1ZOXS87eI&query={users(limit: 2){name career social{github linkedin twitter}}}'
function* fetchUser() {
  try {
    const response = yield call($.get, url/*'https://id3ntityapi.herokuapp.com/users'*/)
    const user = {
      name: response.data.users[0].name, 
      career: response.data.users[0].career
    }
    yield put({ type: FETCH_USER_FULFILLED, payload: user })

  } catch (e) {
    yield put({ type: FETCH_USER_REJECTED, payload: e.message })
  }
}

export default function* watchFetchUser() {
  yield takeEvery(FETCH_USER, fetchUser)
}

import * as $ from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { 
  FETCH_USER,
  FETCH_USER_FULFILLED, 
  FETCH_USER_REJECTED 
} from './UserActions'

function* fetchUser() {
  try {
    const response = yield call($.get, 'http://localhost:3000/users')
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
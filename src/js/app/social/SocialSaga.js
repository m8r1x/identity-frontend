import  * as $  from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { 
  FETCH_SOCIAL,
  FETCH_SOCIAL_FULFILLED, 
  FETCH_SOCIAL_REJECTED 
} from './SocialActions'

// $.defaults.baseURL = 'https://id3ntityapi.herokuapp.com/users'
$.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTk3MDgwMjR9.nRyldVw89WtcYU9zDUsMyINmmYDmUEZ2U6gPv4pmUks'

function* fetchSocial() {
  try {
    const response = yield call($.get, 'http://id3ntityapi.herokuapp.com/users')
    const social = response.data[0].socials
    yield put({ type: FETCH_SOCIAL_FULFILLED, payload: social })
  } catch (e) {
    yield put({ type: FETCH_SOCIAL_REJECTED, payload: e.message })
  }
}

export default function* watchFetchSocial() {
  yield takeEvery(FETCH_SOCIAL, fetchSocial)
}
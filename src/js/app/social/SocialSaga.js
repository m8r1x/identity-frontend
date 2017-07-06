import  * as $  from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { 
  FETCH_SOCIAL,
  FETCH_SOCIAL_FULFILLED, 
  FETCH_SOCIAL_REJECTED 
} from './SocialActions'

function* fetchSocial() {
  try {
    const response = yield call($.get, 'http://localhost:3000/users')
    const social = response.data[0].social
    yield put({ type: FETCH_SOCIAL_FULFILLED, payload: social })
  } catch (e) {
    yield put({ type: FETCH_SOCIAL_REJECTED, payload: e.message })
  }
}

export default function* watchFetchSocial() {
  yield takeEvery(FETCH_SOCIAL, fetchSocial)
}
import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './actions'

export const doListRushing = function* ({ payload }) {
  try {
    const res = yield call(axios.get, '/rushing/', payload)
    yield put(actions.listRushingSuccess(res.data))
  } catch (error) {
    yield put(actions.listRushingFail(error))
  }
}

export const saga = function* () {
  yield takeEvery(actions.LIST_RUSHING, doListRushing)
}

import { all } from 'redux-saga/effects'
import { saga as rushingSaga } from './modules/rushing'

export default function* rootSaga() {
  yield all([rushingSaga()])
}

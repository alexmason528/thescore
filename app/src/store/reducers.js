import { combineReducers } from 'redux'
import { reducer as rushingReducer } from './modules/rushing'

export default combineReducers({
  rushing: rushingReducer,
})

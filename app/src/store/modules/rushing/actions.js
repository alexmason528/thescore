import { createAction } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'

export const LIST_RUSHING = 'LIST_RUSHING'

export const listRushing = createAction(LIST_RUSHING)
export const listRushingSuccess = createAction(successAction(LIST_RUSHING))
export const listRushingFail = createAction(failAction(LIST_RUSHING))

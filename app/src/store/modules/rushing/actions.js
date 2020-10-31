import { createAction } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'

export const LIST_RUSHING = 'LIST_RUSHING'

export const LIST_TEAM = 'LIST_TEAM'

export const listRushing = createAction(LIST_RUSHING)
export const listRushingSuccess = createAction(successAction(LIST_RUSHING))
export const listRushingFail = createAction(failAction(LIST_RUSHING))

export const listTeam = createAction(LIST_TEAM)
export const listTeamSuccess = createAction(successAction(LIST_TEAM))
export const listTeamFail = createAction(failAction(LIST_TEAM))

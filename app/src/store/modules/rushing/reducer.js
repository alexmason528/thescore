import { handleActions, combineActions } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'
import { LIST_RUSHING, LIST_TEAM } from './actions'

export const INITIAL_STATE = {
  data: {
    rushing: [],
    meta: {
      page: 1,
      page_size: 10,
      total: 0,
    },
  },
  teams: [],
  loading: false,
  error: null,
}

export const reducer = handleActions(
  {
    [combineActions(LIST_RUSHING, LIST_TEAM)]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),

    [successAction(LIST_RUSHING)]: (state, { payload }) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    [successAction(LIST_TEAM)]: (state, { payload }) => ({
      ...state,
      teams: payload,
      loading: false,
    }),

    [combineActions(failAction(LIST_RUSHING), failAction(LIST_TEAM))]: (
      state,
      { payload }
    ) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  INITIAL_STATE
)

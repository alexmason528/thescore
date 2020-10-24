import { handleActions } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'
import { LIST_RUSHING } from './actions'

export const INITIAL_STATE = {
  data: {
    rushing: [],
    meta: {
      page: 1,
      page_size: 10,
      total: 0,
    },
  },
  loading: false,
  error: null,
}

export const reducer = handleActions(
  {
    [LIST_RUSHING]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),

    [successAction(LIST_RUSHING)]: (state, { payload }) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    [failAction(LIST_RUSHING)]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  INITIAL_STATE
)

import { handleActions } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'
import { LIST_RUSHING } from './actions'

const initialState = {
  rushing: [],
  loading: false,
  error: null,
}

export const reducer = handleActions(
  {
    [LIST_RUSHING]: () => ({
      error: null,
      loading: true,
    }),

    [successAction(LIST_RUSHING)]: (state, payload) => ({
      ...state,
      rushing: payload,
      loading: false,
    }),

    [failAction(LIST_RUSHING)]: (state, payload) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  initialState
)

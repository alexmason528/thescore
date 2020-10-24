import { pick } from 'lodash'
import { RushingMocks } from 'test/mocks'
import { listRushing, listRushingFail, listRushingSuccess } from '../actions'
import { reducer, INITIAL_STATE } from '../reducer'

describe('Rushing reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE)
  })

  it('should return loading state', () => {
    const nextState = reducer(INITIAL_STATE, listRushing())

    expect(pick(nextState, ['loading', 'error'])).toEqual({
      loading: true,
      error: null,
    })
  })

  it('should return success state', () => {
    const payload = {
      rushings: RushingMocks(10),
      meta: {
        page: 1,
        paeg_size: 10,
        total: 320,
      },
    }
    const action = listRushingSuccess(payload)
    const nextState = reducer(INITIAL_STATE, action)

    expect(pick(nextState, ['data', 'loading'])).toEqual({
      loading: false,
      data: payload,
    })
  })

  it('should return fail state', () => {
    const payload = new Error('Error')
    const action = listRushingFail(payload)
    const nextState = reducer(INITIAL_STATE, action)

    expect(pick(nextState, ['error', 'loading'])).toEqual({
      loading: false,
      error: payload,
    })
  })
})

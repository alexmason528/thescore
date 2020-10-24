import { RushingMocks } from 'test/mocks'
import * as selectors from '../selectors'

const state = {
  rushing: {
    data: {
      rushings: RushingMocks(20),
      meta: {
        page: 2,
        page_size: 20,
        total: 300,
      },
    },
    loading: true,
    error: null,
  },
}

describe('Rushing selectors', () => {
  it('tests', () => {
    const { rushing } = state

    expect(selectors.selectRushingState(state)).toEqual(rushing)
    expect(selectors.selectRushingData(state)).toEqual(rushing.data)
    expect(selectors.selectRushingLoading(state)).toEqual(rushing.loading)
    expect(selectors.selectRushingError(state)).toEqual(rushing.error)
  })
})

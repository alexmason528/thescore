import axios from 'axios'
import { recordSaga } from 'test/utils'
import { RushingMocks } from 'test/mocks'
import { listRushing, listRushingFail, listRushingSuccess } from '../actions'
import { doListRushing } from '../sagas'

jest.mock('axios')

describe('Rushing sagas', () => {
  it('list rushing', async () => {
    /* success */
    const successResponse = {
      data: {
        rushings: RushingMocks(20),
        meta: {
          page: 1,
          page_size: 20,
          total: 300,
        },
      },
    }

    let payload = { params: { page: 2, page_size: 20 } }

    axios.get.mockResolvedValue(successResponse)

    let dispatched = await recordSaga(doListRushing, listRushing(payload))

    expect(axios.get).toHaveBeenCalledWith('/rushings/', payload)
    expect(dispatched).toContainEqual(listRushingSuccess(successResponse.data))

    /* fail */
    const failResponse = new Error('error')

    payload = { params: { page: 2, page_size: 20 } }

    axios.get.mockRejectedValue(failResponse)

    dispatched = await recordSaga(doListRushing, listRushing(payload))

    expect(axios.get).toHaveBeenCalledWith('/rushings/', payload)
    expect(dispatched).toContainEqual(listRushingFail(failResponse))
  })
})

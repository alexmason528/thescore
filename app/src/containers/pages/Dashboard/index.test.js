import React from 'react'
import { mount, shallow } from 'enzyme'
import axios from 'axios'
import { createStore } from 'redux'
import { listRushing } from 'store/modules/rushing'
import reducer from 'store/reducers'
import { RushingMocks } from 'test/mocks'
import { withProvider } from 'test/utils'
import Dashboard from './index'

jest.mock('axios')

const initialState = {
  rushing: {
    data: {
      rushings: RushingMocks(20),
      meta: {
        page: 1,
        page_size: 20,
        total: 300,
      },
    },
    loading: false,
    error: null,
  },
}

describe('Dashboard page test', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = createStore(reducer, initialState)
    store.dispatch = jest.fn()
    wrapper = withProvider(mount, <Dashboard />, store)
  })

  it('renders correctly', () => {
    expect(withProvider(shallow, <Dashboard />, store)).toMatchSnapshot()
    expect(store.dispatch).toHaveBeenLastCalledWith(listRushing())
  })

  it('should download csv', () => {
    /* fail */
    const button = wrapper.find('button').first()
    const errorResposne = new Error('error')
    axios.get.mockRejectedValue(errorResposne)

    button.simulate('click')

    /* success */
    const successResponse = 'data'
    axios.get.mockResolvedValue(successResponse)
    button.simulate('click')
  })

  it('should handle table change', () => {
    const secondPageButton = wrapper.find('.ant-pagination-item').at(1)
    secondPageButton.simulate('click')

    const params = { page: 2, page_size: 20 }

    expect(store.dispatch).toHaveBeenLastCalledWith(listRushing({ params }))
  })

  it('should handle sort', () => {
    const ydsSorter = wrapper.find('.ant-table-column-sorters').first()
    ydsSorter.simulate('click')

    const params = { page: 1, page_size: 20, order_by: 'yds', dir: 'ascend' }
    expect(store.dispatch).toHaveBeenLastCalledWith(listRushing({ params }))
  })

  it('should handle search', () => {
    const filterButton = wrapper.find('.ant-table-filter-trigger')
    filterButton.simulate('click')

    /* Set text in search input */
    const input = wrapper.find('.search-input').last()
    input.simulate('change', { target: { value: 'Player' } })

    const searchButton = wrapper.find('.search-btn').last()
    searchButton.simulate('click')

    let params = {
      page: 1,
      page_size: 20,
      player: 'Player',
    }
    expect(store.dispatch).toHaveBeenLastCalledWith(listRushing({ params }))

    /* Download csv with filtered result */
    const downloadButton = wrapper.find('button').first()
    const successResponse = 'data'
    axios.get.mockImplementation((url) => {
      expect(url).toBe(`/rushings.csv/?player=${params.player}`)
      return successResponse
    })
    downloadButton.simulate('click')

    /* Clear text in search input */
    input.simulate('change', { target: { value: '' } })
    searchButton.simulate('click')

    params = {
      page: 1,
      page_size: 20,
    }
    expect(store.dispatch).toHaveBeenLastCalledWith(listRushing({ params }))
  })
})

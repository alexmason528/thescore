import React from 'react'
import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { store } from 'store'
import Dashboard from './index'

describe('Routes test', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })
})

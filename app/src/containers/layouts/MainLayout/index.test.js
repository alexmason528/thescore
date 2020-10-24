import React from 'react'
import { Button } from 'antd'
import { shallow } from 'enzyme'

import MainLayout from './index'

describe('MainLayout', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <MainLayout>
        <Button>Click</Button>
      </MainLayout>
    )
    expect(wrapper).toMatchSnapshot()
  })
})

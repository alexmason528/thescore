import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Dashboard } from 'containers/pages'

import Team from 'containers/pages/Team'

import { MainLayout } from 'containers/layouts'

const Routes = () => (
  <MainLayout>
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/team" component={Team} />
    </BrowserRouter>
  </MainLayout>
)

export default Routes

import React from 'react'
import { Switch } from 'react-router-dom'

import CustomRouter from './CustomRouter'

import Home from '../pages/Home'

function Routes () {
  return (
      <Switch>
        <CustomRouter path='/'
          exact
          component={ Home }
        />
      </Switch>
  )
}

export default Routes

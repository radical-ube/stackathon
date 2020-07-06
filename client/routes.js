import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'

import {Start, Rainbow, Questions} from './components'

const Routes = props => {
  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route exact path="/rainbow" component={Rainbow} />
      <Route exact path="/questions" component={Questions} />

      {/* Displays our Start component as a default */}
      <Route component={Start} />
    </Switch>
  )
}

const mapState = state => {
  return {}
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState)(Routes))

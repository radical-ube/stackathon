import React from 'react'
import {connect} from 'react-redux'

// material UI components
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

// MUI classes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

import {default as Rainbow} from './rainbow'

export const Start = props => {
  const classes = useStyles()
  // const { scene } = props

  return (
    <div>
      <Rainbow />
    </div>
  )
}

const mapState = state => {
  return {
    scene: state.scene
  }
}

export default connect(mapState)(Start)

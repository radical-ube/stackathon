import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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

export const Start = props => {
  const classes = useStyles()

  return (
    <div>
      <Link to="/rainbow">Rainbow</Link>
      <Link to="/questions">Questions</Link>
    </div>
  )
}

const mapState = state => {
  return {
    scene: state.scene
  }
}

export default connect(mapState)(Start)

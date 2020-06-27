import React from 'react'
import {connect} from 'react-redux'

// material UI components
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// MUI classes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

// p5 sketches
import {default as Scene} from './scene'
import {default as Scene2} from './scene2'

export const Start = props => {
  const classes = useStyles()

  return (
    <div>
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h3" className={classes.title}>
                Start Page
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Scene />
        <Scene2 />
        {/* <P5wrapper /> */}
      </div>
      {/* <div>
        <h3>second div</h3>
      </div>
      <div>
        <h3>third div</h3>
      </div> */}
    </div>
  )
}

export default connect(null)(Start)

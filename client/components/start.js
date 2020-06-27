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

// p5 sketches
import {default as Scene} from './scene'
import {default as Scene2} from './scene2'

export const Start = props => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.root}>
        <Grid container direction="row" justify="center" spacing={0}>
          <Grid item xs={12} sm={6}>
            <Scene />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Scene2 />
          </Grid>
          {/* <Grid item xs>
              <Scene />
            </Grid> */}
        </Grid>
      </Box>
      <div>
        <h3>second div</h3>
      </div>
      <div>
        <h3>third div</h3>
      </div>
    </div>
  )
}

export default connect(null)(Start)

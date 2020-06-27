import React from 'react'
import {connect} from 'react-redux'

// material UI components
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

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
      </div>
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

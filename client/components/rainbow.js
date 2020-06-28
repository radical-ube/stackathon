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
import {red, purple} from './sketches/index'

const Rainbow = props => {
  return (
    <Box className={useStyles().root}>
      <Grid container direction="row" justify="center" spacing={0}>
        <Grid item xs={12} sm={6}>
          <Scene color={red} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Scene color={purple} />
        </Grid>
        {/* <Grid item xs>
              <Scene />
            </Grid> */}
      </Grid>
    </Box>
  )
}

export default connect(null)(Rainbow)

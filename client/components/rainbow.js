import React from 'react'

// material UI components
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Box, AppBar, Toolbar, Typography} from '@material-ui/core/'

// MUI classes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

// p5 sketches
import {Scene} from './rainbow/scene'

import {
  getRedColor,
  getOrangeColor,
  getYellowColor,
  getGreenColor,
  getBlueColor,
  getPurpleColor
} from './rainbow/colors'

export const Rainbow = props => {
  return (
    <Box className={useStyles().root}>
      <Box>
        <AppBar position="static" className={useStyles().root}>
          <Toolbar justify="center">
            <Typography gutterBottom variant="h5" component="p">
              Directions: press 's' to rain blocks, 'f' to reverse gravity, 'a'
              to slow time, 'd' to normalize time
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container direction="row" justify="center" spacing={0}>
        <Grid item xs={12} sm={2}>
          <Scene getColor={getRedColor} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Scene getColor={getOrangeColor} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Scene getColor={getYellowColor} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Scene getColor={getGreenColor} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Scene getColor={getBlueColor} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Scene getColor={getPurpleColor} />
        </Grid>
      </Grid>
    </Box>
  )
}

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// material UI components
import {makeStyles} from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

// MUI classes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  media: {
    width: window.innerWidth / 2,
    height: window.innerHeight * 0.7
  }
}))

export const Start = props => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Card justify="center">
            <Link to="/rainbow">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./assets/pridenyc.jpg"
                  title="Pride NYC"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rain(bow) On Me
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Rain some rainbow blocks on the world!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card justify="center">
            <Link to="/questions">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./assets/queenspride.jpg"
                  title="Queens Pride"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    What makes you proud?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Let us know what makes you proud!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

const mapState = state => {
  return {
    scene: state.scene
  }
}

export default connect(mapState)(Start)

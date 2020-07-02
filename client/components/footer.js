import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// material UI components
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Button, Menu, MenuItem, Fade} from '@material-ui/core'

// MUI classes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: '#fff'
  },
  title: {
    flexGrow: 1
  }
}))

export default function SimpleBottomNavigation() {
  const classes = useStyles()

  return (
    <nav>
      <AppBar position="static" className={classes.root}>
        <Toolbar justify="center">
          <a href="https://github.com/radical-ube/stackathon">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.root}
            >
              Github
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

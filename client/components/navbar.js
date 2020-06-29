import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

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

const Navbar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <nav>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.root}
          >
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">Home Page</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/rainbow">Rain(bow) On Me</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/questions">What Makes You Proud</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {}
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

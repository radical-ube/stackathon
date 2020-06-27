import React from 'react'

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

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <Box className={useStyles().root}>
      <Navbar />
      <Routes />
    </Box>
  )
}

export default App

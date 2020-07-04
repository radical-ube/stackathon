import React from 'react'

// material UI components
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

// MUI classes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <Box className={useStyles().root}>
      <Navbar />
      <Routes />
      <Footer />
    </Box>
  )
}

export default App

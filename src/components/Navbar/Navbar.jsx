import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

import logo from '../../assets/16544.jpg'
import useStyles from './styles'
import { CartContext } from '../../contexts/context'

const Navbar = () => {
  const classes = useStyles()

  const cart = useContext(CartContext)

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar

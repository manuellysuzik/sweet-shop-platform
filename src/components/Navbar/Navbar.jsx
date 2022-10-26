import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/cupcake-svgrepo-com.svg';
import useStyles from './styles';
import { CartContext } from '../../contexts/context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();

  const cart = useContext(CartContext);

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
            Sweet Store
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={cart.length} color='secondary'>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                  <ShoppingCart />
                </Link>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

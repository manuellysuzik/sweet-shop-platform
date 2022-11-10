import React, { useContext } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { CartContext } from '../../contexts/context';
import api from '../../api/axios';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const Cart = () => {
  const classes = useStyles();
  const cart = useContext(CartContext);
  const cartIsEmpty = !cart.length;
  var cartTotal = 0;

  const groupProductByQuantity = () => {
    const countProducts = _.countBy(cart, (item) => {
      return item?.product?.id;
    });

    const buildCartItems = cart.map((item) => {
      return {
        ...item,
        unit: countProducts[item?.product?.id],
      };
    });
    const formattedArrayOfProducts = _.unionBy(
      buildCartItems,
      (item) => item?.product?.id
    );
    return formattedArrayOfProducts;
  };
  const cartItems = groupProductByQuantity();

  const handleCartProducts = async () => {
    await api.post('/cart', cartItems);

    return alert('Item enviado');
  };

  if (!cartIsEmpty) {
    cartTotal = _.sumBy(cartItems, (item) => item.price * item.unity).toFixed(
      2
    );
  }

  const EmptyCart = () => (
    <Typography variant='subtitle1'> Não tem itens no carrinho </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartItems?.map((cartItem, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <CartItem cartItem={cartItem} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>Total: {cartTotal}</Typography>
        <div>
          <Link to='/' className={classes.Link}>
            <Button
              className={classes.emptyButton}
              size='large'
              type='button'
              variant='contained'
              color='secondary'
            >
              Continuar Comprando
            </Button>
          </Link>
          <Link to='/cartEnd' className={classes.Link}>
            <Button
              className={classes.checkoutButton}
              size='large'
              type='button'
              variant='contained'
              color='primary'
              onClick={handleCartProducts}
            >
              Finalizar
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3'>
        Seu Carrinho
      </Typography>
      {cartIsEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

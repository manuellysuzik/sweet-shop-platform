import React, { useContext } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { CartContext } from '../../contexts/context';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import _ from 'lodash';

const Cart = () => {
  const classes = useStyles();
  const cart = useContext(CartContext);
  const cartIsEmpty = !cart.length;
  var cartTotal = 0;

  const groupProductByQuantity = () => {
    const countProducts = _.countBy(cart, (item) => {
      return item?.product?.name;
    });
    const formattedArrayOfProducts = cart.map((item) => {
      return {
        product: item?.product,
        unity: countProducts[item?.product?.name],
      };
    });
    const uniqProducts = _.sortedUniqBy(
      formattedArrayOfProducts,
      (item) => item?.product?.id
    );

    return uniqProducts;
  };

  const cartWithFormattedProducts = groupProductByQuantity();

  if (!cartIsEmpty) {
    cartTotal = _.sumBy(
      cartWithFormattedProducts,
      (item) => item.product.price * item.unity
    ).toFixed(2);
  }

  const EmptyCart = () => (
    <Typography variant='subtitle1'> Não tem itens no carrinho </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartWithFormattedProducts?.map((cartItem, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <CartItem cartItem={cartItem} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>Total: {cartTotal}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size='large'
            type='button'
            variant='contained'
            color='primary'
          >
            {' '}
            Checkout
          </Button>
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

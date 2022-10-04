import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import React from 'react';
import useStyles from './styles';
const CartItem = ({ cartItem }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={cartItem?.product.image_url}
        alt={cartItem?.product.name}
        className={classes.media}
        component='div'
      />
      <CardContent className={classes.cardContent}>
        <Typography variant='h4'>{cartItem?.product.name}</Typography>
        <Typography variant='h5'>
          R$ {cartItem?.product.price} x {cartItem?.unity}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type='button' size='small'>
            -
          </Button>
          <Typography>{cartItem.unity}</Typography>
          <Button type='button' size='small'>
            +
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;

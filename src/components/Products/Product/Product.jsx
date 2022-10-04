import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles';

const Product = ({ product, onClickCartButton }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image_url}
        title={product.name}
        component='div'
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h6' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h6'> R$ {product.price}</Typography>
        </div>
        <Typography variant='body2' color='textSecondary'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label='Adicionar ao carrinho'
          onClick={() => onClickCartButton(product)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

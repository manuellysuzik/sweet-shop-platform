import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import api from '../../api/axios';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ onClickCartButton }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      await api.get('/').then((response) => {
        setProducts(response.data);
      });
    } catch (err) {
      console.log(err.message || 'Unexpected Error!');
    }
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.length
          ? products?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Product
                  product={product}
                  onClickCartButton={onClickCartButton}
                />
              </Grid>
            ))
          : 'Não encontrado'}
      </Grid>
    </main>
  );
};

export default Products;

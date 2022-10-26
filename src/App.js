import { ThemeProvider, useTheme } from '@mui/material';
import { useState } from 'react';
import { Products, Navbar, Cart } from './components';
import { CartContext } from './contexts/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  const theme = useTheme();

  const [cart, setCart] = useState([]);

  const addProductToCart = (selectedProduct) => {
    cart.push({ product: selectedProduct, unit: 1 });

    setCart([...cart]);
  };

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CartContext.Provider value={cart}>
            <Navbar />
            <Routes>
              <Route path='/cart' element={<Cart />} />

              <Route
                path='/'
                element={<Products onClickCartButton={addProductToCart} />}
              />
            </Routes>
          </CartContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

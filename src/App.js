
import { ThemeProvider, useTheme } from "@mui/material";
import { useState } from "react";
import { Products, Navbar, Cart } from "./components"
import { CartContext } from "./contexts/context";


const App = () => {
  const theme = useTheme()

  const [cart, setCart] = useState([])

  const addProductToCart = (selectedProduct) => {
    cart.push({ product:selectedProduct, unit: 1 })

    setCart([...cart])
  }

  return (
    <div>

      <ThemeProvider theme={theme}>
        <CartContext.Provider value={cart}>
          <Cart />
          <Navbar />
          <Products onClickCartButton={addProductToCart} />
        </CartContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default App;

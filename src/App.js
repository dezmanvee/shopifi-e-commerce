import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { Products, Navbar, Cart , Checkout} from "./components";
import { commerce } from "./lib/commerce";
// import { set } from "react-hook-form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = createTheme({
  palette: {
    background: {
      paper: "#F8FAFB",
    },
    text: {
      primary: "#333333",
      secondary: "#46505A",
    },
  },
});

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });

    setCart(item);
  };

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);

    setCart(item);
  };

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();

    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

 
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar totalItems={cart?.total_items} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
            />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

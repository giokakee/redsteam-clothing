import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { Provider, useDispatch } from "react-redux";
import { store } from "./app/store";
import { useEffect } from "react";
import cartApi from "./api/cartApi";
import { fetchCart } from "./features/cart/cartThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        dispatch(fetchCart());
      } catch (err) {
        console.log(err);
      }
    };

    fetchCartData();
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;

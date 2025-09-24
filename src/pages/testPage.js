import { use, useEffect, useState } from "react";
import cartApi from "../api/cartApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  checkoutCart,
  fetchCart,
  removeFromCart,
  updateCartQuantity,
} from "../features/cart/cartThunk";
import { BiColor } from "react-icons/bi";
import axios from "axios";

const userToRegister = {
  email: "zimbabue@example.com",
  username: "zimbabue",
  password: "testpassword",
  password_confirmation: "testpassword",
};

const TestPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);
  const [quantitiInput, setQuantitiInput] = useState("");
  // Load cart on mount
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const addToCartButton = async () => {
    try {
      dispatch(
        addToCart({ id: 14, data: { quantity: 2, color: "red", size: "M" } })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateCart = async () => {
    try {
      console.log("aee");
      dispatch(updateCartQuantity({ id: 199, quantity: quantitiInput }));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFromCartBbutton = async () => {
    try {
      dispatch(removeFromCart(19));
    } catch (err) {
      console.log(err);
    }
  };

  const checkoutFromCart = async () => {
    try {
      dispatch(
        checkoutCart({
          data: {
            name: "namesssssss",
            surname: "surnamessssss",
            address: "addressssss",
            zip_code: "1234",
            email: "someEmaill@gmail.com",
          },
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={addToCartButton}>add to cart</button>

      {items.map((item) => (
        <div key={item.id}>
          {item.name} - {item.quantity}
        </div>
      ))}

      <button onClick={updateCart}>update</button>
      <button onClick={deleteFromCartBbutton}>delete</button>
      <input
        value={quantitiInput}
        onChange={(e) => setQuantitiInput(e.target.value)}
      />

      <button onClick={checkoutFromCart}>checkout</button>
    </div>
  );
};

export default TestPage;

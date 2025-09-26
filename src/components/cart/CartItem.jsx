import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../features/cart/cartThunk";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(
        updateCartQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleIncrement = () => {
    dispatch(
      updateCartQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  return (
    <div className="cart-item">
      <img
        src={item.cover_image}
        alt={item.title}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <div className="cart-item-info">
          <p className="cart-item-title">{item.name}</p>
          <p className="cart-item-price">${item.price}</p>
        </div>
        <p className="cart-item-color">{item.color}</p>
        <p className="cart-item-size">{item.size}</p>
        <div className="cart-item-quantity-container">
          <div className="cart-item-quantity-controls">
            <button
              style={{ display: item.quantity === 1 ? "none" : "block" }}
              className="cart-item-quantity-button"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="cart-item-quantity">{item.quantity}</span>
            <button
              className="cart-item-quantity-button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button
            className="cart-item-remove-button"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

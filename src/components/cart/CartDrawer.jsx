import CartItem from "./CartItem";
import "./CartDrawer.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartDrawer({ isOpen, onClose, items }) {
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = 5;

  const goToCheckout = () => {
    navigate("/checkout", { replace: true });
    onClose();
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Shopping Cart ({items.length})</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <p>Subtotal: ${subtotal}</p>
                <p>Delivery: ${5}</p>
                <p className="total">Total: ${subtotal + delivery}</p>
              </div>
              <button onClick={goToCheckout} className="checkout-btn">
                Go to checkout{" "}
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <AiOutlineShoppingCart color="#ff4000" size={170} />
            <div className="empty-message">
              <p className="empty-title">Ooops!</p>
              <p>You’ve got nothing in your cart just yet...</p>
            </div>
            <button onClick={onClose}>Start shopping</button>
          </div>
        )}
      </div>
    </>
  );
}

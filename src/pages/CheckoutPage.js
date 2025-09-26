import { useState } from "react";
import "./CheckoutPage.css";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import { FiMail } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const InputWrapper = ({ placeholder, type, onChange, value }) => {
  return (
    <div className="input-wrapper">
      {type === "email" && <FiMail size={20} color="#3E424A" />}
      <input type={type} placeholder={placeholder} required />
    </div>
  );
};

const CheckoutPage = () => {
  const [checkout, setCheckout] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    zip_code: "",
  });

  const [paidSuccess, setPaidSuccess] = useState(false);

  const { items } = useSelector((state) => state.cart);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = 5;

  const pay = () => {
    setPaidSuccess(true);
  };

  const navigate = useNavigate();

  const congrats = () => {
    setPaidSuccess(false);
    navigate("/");
  };

  return (
    <div className="checkout-page-container">
      <div className="congrats" style={paidSuccess ? {} : { display: "none" }}>
        <MdDone size={100} color="#318A1D" />
        <p className="congrats-text">Congrats!</p>
        <p>Your order is placed successfully!</p>
        <button onClick={congrats} className="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>
      <div className="checkout-page">
        <h1>Checkout </h1>

        <div className="checkout-content">
          <div className="checkout-form">
            <p className="order-details">Order details</p>
            <div className="checkout-name">
              <InputWrapper
                placeholder="Name"
                type="text"
                value={checkout.name}
                onChange={(e) =>
                  setCheckout({ ...checkout, name: e.target.value })
                }
              />
              <InputWrapper
                placeholder="Surname"
                type="text"
                value={checkout.surname}
                onChange={(e) =>
                  setCheckout({ ...checkout, surname: e.target.value })
                }
              />
            </div>
            <div>
              <InputWrapper
                placeholder="Email"
                type="email"
                value={checkout.email}
                onChange={(e) =>
                  setCheckout({ ...checkout, email: e.target.value })
                }
              />
            </div>
            <div className="checkout-address">
              <InputWrapper
                placeholder="Address"
                type="text"
                value={checkout.address}
                onChange={(e) =>
                  setCheckout({ ...checkout, address: e.target.value })
                }
              />
              <InputWrapper
                placeholder="Zip code"
                type="text"
                value={checkout.zip_code}
                onChange={(e) =>
                  setCheckout({ ...checkout, zip_code: e.target.value })
                }
              />
            </div>
          </div>
          <div className="checkout-cart">
            <div className="cart-items cart-items-checkout">
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
              <button onClick={pay} className="checkout-btn">
                Pay{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

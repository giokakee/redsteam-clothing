import { useState } from "react";
import "./CheckoutPage.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import { FiMail } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { checkoutCart } from "../features/cart/cartThunk";

const InputWrapper = ({
  placeholder,
  type,
  setCheckout,
  value,
  checkout,
  name,
}) => {
  return (
    <div className="input-wrapper">
      {type === "email" && <FiMail size={20} color="#3E424A" />}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          setCheckout({ ...checkout, [e.target.name]: e.target.value })
        }
        required
      />
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
  const dispatch = useDispatch();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = 5;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const zipRegex = /^[0-9]{4,10}$/;

  const isValid =
    checkout.name?.trim().length >= 3 &&
    checkout.surname?.trim().length >= 3 &&
    checkout.address?.trim().length >= 3 &&
    emailRegex.test(checkout.email) &&
    zipRegex.test(checkout.zip_code);

  const pay = () => {
    dispatch(checkoutCart({ data: checkout }));
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
                checkout={checkout}
                setCheckout={setCheckout}
                name={"name"}
              />
              <InputWrapper
                placeholder="Surname"
                type="text"
                value={checkout.surname}
                checkout={checkout}
                setCheckout={setCheckout}
                name={"surname"}
              />
            </div>
            <div>
              <InputWrapper
                placeholder="Email"
                type="email"
                value={checkout.email}
                checkout={checkout}
                setCheckout={setCheckout}
                name={"email"}
              />
            </div>
            <div className="checkout-address">
              <InputWrapper
                placeholder="Address"
                type="text"
                value={checkout.address}
                checkout={checkout}
                setCheckout={setCheckout}
                name={"address"}
              />
              <InputWrapper
                placeholder="Zip code"
                type="text"
                value={checkout.zip_code}
                checkout={checkout}
                setCheckout={setCheckout}
                name={"zip_code"}
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
              <button
                onClick={pay}
                className={`checkout-btn ${
                  !isValid ? "checkout-btn-disabled" : ""
                }`}
                disabled={!isValid}
                aria-disabled={!isValid}
              >
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

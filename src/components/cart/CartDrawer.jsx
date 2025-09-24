import { motion } from "framer-motion";
import CartItem from "./CartItem";

const CartOverlay = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    />
  );
};

export default function CartDrawer({ isOpen, onClose, items }) {
  //   const subtotal = items.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0
  //   );
  const delivery = 5;
  //   const total = subtotal + delivery;

  return (
    <>
      {false && <CartOverlay onClose={onClose} />}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">
            Shopping cart ({items.length})
          </h2>
          <button onClick={onClose}>
            <p className="w-6 h-6">aeeeeeeeee</p>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))} */}
        </div>

        {/* Footer */}
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between">
            <span>Items subtotal</span>
            <span>${}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>${}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${}</span>
          </div>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl mt-3">
            Go to checkout
          </button>
        </div>
      </motion.div>
    </>
  );
}

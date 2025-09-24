const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between gap-3 border p-2 rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-500">
          {item.color} | {item.size}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <button className="px-2 py-1 border rounded">-</button>
          <span>{item.quantity}</span>
          <button className="px-2 py-1 border rounded">+</button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-semibold">${item.price}</span>
        <button className="text-sm text-red-500 mt-1">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="w-full flex h-20 mb-4 px-2">
      <div className="relative w-1/2 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="w-3/4 flex flex-col items-start justify-center py-2 px-5">
        <span className="text-sm">{name}</span>
        <span className="text-sm">
          {quantity} x £{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

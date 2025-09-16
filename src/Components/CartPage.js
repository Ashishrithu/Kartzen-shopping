import React, { useState } from "react";

function CartPage({ cart, setCart }) {
  // local state to track quantity for each item
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; // default quantity = 1
      return acc;
    }, {})
  );

  const increaseQty = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const decreaseQty = (id) => {
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    // also remove quantity tracking
    const newQuantities = { ...quantities };
    delete newQuantities[id];
    setQuantities(newQuantities);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );

  return (
    <div>
      <h2 className="shopping-cart">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-msg">Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                width="100"
                height="100"
                style={{ marginRight: "10px" }}
              />
              <div style={{ flex: 1 }}>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{quantities[item.id]}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
                </div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <p>${(item.price * quantities[item.id]).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDrawer({ open, setOpen }) {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: open ? 0 : "-100%",
        width: "90%",
        maxWidth: 380,
        height: "100vh",
        background: "#fff",
        boxShadow: "-4px 0 18px rgba(0,0,0,0.18)",
        transition: "right 0.3s ease",
        zIndex: 99999,
        padding: 16,
        overflowY: "auto",
        borderLeft: "1px solid #eee",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0" style={{ fontWeight: 600 }}>
          Your Cart
        </h5>
        <button
          className="btn btn-sm btn-light"
          onClick={() => setOpen(false)}
          style={{ border: "1px solid #ccc", fontSize: 13, padding: "3px 10px" }}
        >
          Close
        </button>
      </div>

      {cart.length === 0 && (
        <p className="text-muted text-center mt-5">Your cart is empty.</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center mb-3 p-2 rounded shadow-sm"
          style={{ gap: 10 }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 8, flexShrink: 0 }}
          />

          <div className="flex-grow-1">
            <div style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</div>
            <div className="text-muted small">₹{item.price}</div>

            <div className="d-flex align-items-center mt-2" style={{ gap: 6 }}>
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() =>
                  updateQty(item.id, item.qty > 1 ? item.qty - 1 : 1)
                }
                style={{ padding: "1px 8px" }}
              >
                -
              </button>
              <span style={{ fontSize: 14 }}>{item.qty}</span>
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => updateQty(item.id, item.qty + 1)}
                style={{ padding: "1px 8px" }}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeFromCart(item.id)}
            style={{ height: 32 }}
          >
            &#10060;
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="p-3 border-top mt-4">
          <h6 style={{ marginBottom: 10 }}>Total: ₹{subtotal}</h6>
          <button className="btn btn-dark w-100 py-2">Checkout</button>
        </div>
      )}
    </div>
  );
}

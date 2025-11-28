import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function WishlistDrawer({ open, setOpen }) {
  const { wishlist, removeFromWishlist, addToCart } = useContext(CartContext);

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
        boxShadow: "-3px 0 15px rgba(0,0,0,0.15)",
        transition: "right 0.3s ease",
        zIndex: 9999,
        padding: 16,
        overflowY: "auto",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0">Wishlist</h5>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>

      {/* Empty State */}
      {wishlist.length === 0 && (
        <p className="text-muted text-center mt-5">Your wishlist is empty.</p>
      )}

      {/* Items */}
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center mb-3 p-2 rounded shadow-sm"
          style={{ gap: "10px" }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: 64,
              height: 64,
              objectFit: "cover",
              borderRadius: 8,
              flexShrink: 0,
            }}
          />
          <div className="flex-grow-1">
            <div style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</div>
            <div className="text-muted">₹{item.price}</div>
          </div>

          <div className="d-flex flex-column gap-1">
            <button
              className="btn btn-sm btn-dark"
              onClick={() => addToCart(item)}
            >
              Add
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => removeFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

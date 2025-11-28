import React, { useState, useContext } from "react";
import siteData from "../data/siteData.json";
import { CartContext } from "../context/CartContext";

import WishlistDrawer from "./WishlistDrawer";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { wishlist, cart } = useContext(CartContext);

  const [wishOpen, setWishOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false); // mobile toggle

  return (
    <>
      <div className="bg-dark text-white text-center py-2 small">
        {siteData.topOffer}
      </div>

      <nav
        className="navbar shadow-sm px-3 sticky-top"
        style={{
          background: "#fff",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <div className="d-flex align-items-center">
            <img
              src={siteData.logo}
              alt="logo"
              height="34"
              style={{ width: "auto", objectFit: "contain" }}
              className="me-2"
            />

            <a
              className="navbar-brand fw-semibold fs-5 m-0"
              href="/"
              style={{ color: "#222", letterSpacing: ".3px" }}
            >
              JW Company
            </a>
          </div>

          <button
            className="btn d-md-none"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: 24,
              marginRight: 6,
            }}
          >
            &#9776; 
          </button>

          
          <div className="d-none d-md-flex align-items-center gap-2">

            
            <button
              className="btn position-relative"
              style={{ fontSize: 20 }}
              onClick={() => setWishOpen(true)}
            >
              &#x2661;
              {wishlist.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 end-0">
                  {wishlist.length}
                </span>
              )}
            </button>

           
            <button
              className="btn position-relative"
              style={{ fontSize: 20 }}
              onClick={() => setCartOpen(true)}
            >
              &#128722;
              {cart.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 end-0">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        
        {menuOpen && (
          <div
            className="d-md-none p-3"
            style={{
              borderTop: "1px solid #eee",
              background: "#fafafa",
            }}
          >
            
            <button
              className="btn w-100 d-flex justify-content-between align-items-center mb-2"
              onClick={() => {
                setWishOpen(true);
                setMenuOpen(false);
              }}
              style={{ background: "#fff", border: "1px solid #ddd" }}
            >
              <span>Wishlist</span>
              <span>&#x2661;</span>
            </button>

           
            <button
              className="btn w-100 d-flex justify-content-between align-items-center"
              onClick={() => {
                setCartOpen(true);
                setMenuOpen(false);
              }}
              style={{ background: "#fff", border: "1px solid #ddd" }}
            >
              <span>Cart</span>
              <span>&#128722;</span>
            </button>
          </div>
        )}
      </nav>

      
      <WishlistDrawer open={wishOpen} setOpen={setWishOpen} />
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
}
